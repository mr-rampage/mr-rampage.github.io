function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  var r = 180;
  var width = $(window).width();
  var height = $(window).height();
  var depth = 1024;

  $('.step').each(function() {
    $(this).css('width', width * 0.9);
    $(this).css('height', height * 0.9);
  });

  $.jmpress("template", "mytemplate", {
      children: function( idx, current_child, children ) {
	return {
	   x: getRandomInt(-width, width)
	  ,y: getRandomInt(-height, height)
	  ,z: getRandomInt(-depth, depth)
	  ,rotate: {
             x: getRandomInt(-r, r)
	    ,y: getRandomInt(-r, r)
	    ,z: getRandomInt(-r, r)
	  }
	  ,template: "mytemplate"
	}
      }
    }
  );

  $('#impress').jmpress({
    hash : { use: false },
    animation: {
      transitionDuration: '2s',
      transitionTimingFunction: 'ease'
    }
  });
});
