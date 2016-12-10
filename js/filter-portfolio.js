
var items = [{
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-02.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-03.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-04.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-05.jpg"
}, {
    pictureid: 2,
    title: "Proin gravida nibh vel velit",
    slug: "foto-design",
    image: "img/photo-06.jpg"
}, {
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-01.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-07.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-08.jpg"
}, {
     pictureid: 0,
      title: "Proin gravida nibh vel velit",
      slug: "identity",
      image: "img/photo-09.jpg"
  }, {
      pictureid: 1,
      title: "Proin gravida nibh vel velit",
      slug: "web-design",
      image: "img/photo-10.jpg"
  }, {
      pictureid: 3,
      title: "Proin gravida nibh vel velit",
      slug: "foto",
      image: "img/photo-12.jpg"
  }, {
      pictureid: 1,
      title: "Proin gravida nibh vel velit",
      slug: "web-design",
      image: "img/photo-13.jpg"
  }, {
      pictureid: 2,
      title: "Proin gravida nibh vel velit",
      slug: "foto-design",
      image: "img/photo-14.jpg"
  }, {
      pictureid: 0,
      title: "Proin gravida nibh vel velit",
      slug: "identity",
      image: "img/photo-15.jpg"
  }, {
      pictureid: 1,
      title: "Proin gravida nibh vel velit",
      slug: "web-design",
      image: "img/photo-16.jpg"
  }, {
      pictureid: 3,
      title: "Proin gravida nibh vel velit",
      slug: "foto",
      image: "img/photo-11.jpg"
  }, {
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-09.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-10.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-12.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-13.jpg"
}, {
    pictureid: 2,
    title: "Proin gravida nibh vel velit",
    slug: "foto-design",
    image: "img/photo-14.jpg"
}, {
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-15.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-16.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-11.jpg"
},{
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-17.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-19.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-20.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-18.jpg"
}, {
    pictureid: 2,
    title: "Proin gravida nibh vel velit",
    slug: "foto-design",
    image: "img/photo-22.jpg"
}, {
    pictureid: 0,
    title: "Proin gravida nibh vel velit",
    slug: "identity",
    image: "img/photo-21.jpg"
}, {
    pictureid: 1,
    title: "Proin gravida nibh vel velit",
    slug: "web-design",
    image: "img/photo-24.jpg"
}, {
    pictureid: 3,
    title: "Proin gravida nibh vel velit",
    slug: "foto",
    image: "img/photo-23.jpg"
}, ]

for (var i = 0; i < items.length; i++) {
    var href = "pictureid-" + items[i].pictureid + "/" + items[i].slug;
    document.write(
        "<a href='" + href + "' class='picture-collage-list'>" +
        "<img src='" + items[i].image + "'>" +
        "<div class='picture-txt'>" +
        "<img src='img/ellipse.png' class='picture-collage-icon'>" +
        "<div class='picture-collage-list-title'>Proin gravida nibh vel velit</div>" +
        "<div class='picture-collage-list-subhead'>Fotogrāfija</div></div>" +
        "</a>");
      }

  FilterLinks: function(element) {
      var displayItems = document.querySelectorAll('collage-box');
      if (pictureid.length == -1) {
          displayItems.classList.add('Items');
      } else {
          var arrById = items.filter(check, find(pictureid, items, categories));
      }
      var activeimage = find check(pictureid, categories,items) {
          return items.pictureid == categories.length;
      }
      for (var i in ) {
        [i].onclick = function(element) {

        }
      }
  }
    // function arrById(pictureid) {
    //     if ('id' in items && typeof(.pictureid) === 'categories' && (.categories)){
    //       return
    //     } else {
    //         return false
    //     }
    // }
  }
