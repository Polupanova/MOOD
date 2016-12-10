function $(selector) {
  return document.querySelector(selector);
}
var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}
function pageSlider(selector, isLoop = false) {
  var pageSlider = {
    slider: null,
    paginator: null,
    slides: [],
    pages: [],
    activePage: 0,
    oLoop: false,

    init: function(selector, isLoop) {
      this.oLoop = isLoop;
      // get slider
      this.slider = document.querySelector(selector);
      if (!this.slider) {
        return false;
      }
      // set slides
      this.slides = this.slider.querySelectorAll('.slider-item');
      this.slides = [].slice.call(this.slides);
      // set prev and next
      this.prev = this.slider.querySelector('.slider-control-prev');
      this.next = this.slider.querySelector('.slider-control-next');
      // generate paginator
      if (this.slides.length > 1) {
        this.generatePagenator();
      }
      for (var i in this.pages) {
        this.pages[i].onclick = function(i, e) {
          e && e.preventDefault();
          this.slideTo(parseInt(i))
        }.bind(this, i)
      }
      this.slider.onclick = function(e) {
        e && e.preventDefault();
        this.slideToPrev();
      }.bind(this);
      this.slider.onclick = function(e) {
        e && e.preventDefault();
        this.slideToNext();
      }.bind(this);
      this.slideTo(0)
    },
    generatePagenator: function() {
      this.paginator = this.slider.querySelector('.slider-paginator');
      for (var i in this.slides) {
        var page = document.createElement('button');
        page.setAttribute('type', 'button');
        page.classList.add('dots');
        this.paginator.appendChild(page);
        this.pages.push(page);
      }
    },
    setActivePage: function(index) {
      if (index >= 0 && index < this.pages.length) {
        this.activePage = index;
        if (!this.oLoop) {
          this.checkArrows();
        }
        if (this.pages.length) {
            for (var i in this.pages) {
              this.pages[i].classList.remove('active');
            }
            this.pages[this.activePage].classList.add('active');
        }
      }
    },
    slideTo: function(index) {
      if (index >= 0 && index < this.slides.length) {
        this.setActivePage(index);
        this.slides.forEach(function(slide) {
          var slideValue = -100 * this.activePage;
          slide.style.transform = 'translateY(' + slideValue + '%)';
        }.bind(this))
      }
    },
    slideToNext: function() {
      if (this.activePage === this.slides.length - 1) {
        this.slideTo(0);
      } else {
        this.slideTo(this.activePage + 1)
      }
    },
    slideToPrev: function() {
      if (this.activePage === 0) {
        this.slideTo(this.slides.length - 1);
      } else {
        this.slideTo(this.activePage - 1)
      }
    }
  }
  pageSlider.init(selector, isLoop);
  return pageSlider;
}
var slider = pageSlider('#main-slider', true);
setInterval(function(){
  slider.slideToPrev();
}, 5000)
