WebFont.load ({
  google: {
    families: ['Raleway', 'sans-serif']
  }
});

WebFont.load ({
  google: {
    families: ['Oswald', 'sans-serif']
  }
});

WebFont.load ({
  google: {
    families: ['Playfair Display', 'serif']
  },

  active: function(){ 
    //when fonts loaded
    console.log('fonts loaded');
}
});

