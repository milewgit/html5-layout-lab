// Generated by CoffeeScript 1.7.1
(function() {
  var draggable, drop, droppable,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  draggable = {
    containment: ".lab",
    revert: true,
    revertDuration: 200,
    start: function() {
      $(this).addClass("dragging");
      return $(".target").css("visibility", "visible");
    },
    stop: function() {
      $(this).removeClass("dragging");
      return $(".target").css("visibility", "hidden");
    }
  };

  drop = function(event, ui) {
    $(ui.draggable.data("html")).droppable(droppable).data({
      accept: ui.draggable.data("accept")
    }).appendTo(this);
    return $(this).removeClass("drop-target");
  };

  droppable = {
    greedy: true,
    over: function() {
      return $(this).addClass("drop-target");
    },
    out: function() {
      return $(this).removeClass("drop-target");
    },
    drop: drop,
    accept: function(draggable) {
      var acceptList, tagName, _ref;
      tagName = draggable.prop("tagName").toLowerCase();
      acceptList = (_ref = $(this).data("accept")) != null ? _ref : [];
      return __indexOf.call(acceptList, tagName) >= 0;
    }
  };

  $(".toolbox header").data({
    html: "<header></header>"
  });

  $(".toolbox section").data({
    html: "<section></section>",
    accept: ["header"]
  });

  $(".workbench").data({
    accept: ["header", "section"]
  });

  $(".toolbox header, .toolbox section").draggable(draggable);

  $(".workbench").droppable(droppable);

}).call(this);
