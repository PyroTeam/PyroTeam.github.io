/*
	Init others js modules like skel and dropotron
*/

(function($) {

	skel.breakpoints({
		global: "",
		wide:  "(max-width: 1680)",
		normal: "(max-width: 1280px)",
		narrow:  "(max-width: 980px)",
		narrower: "(max-width: 840px)",
		mobile: "(max-width: 640px)"
	});

	skel.layout({
		reset: "normalize",
		containers: true,
		grid: true
		/*,
		breakpoints: {
			global: {
				containers: "90%"
			},
			small: {
				containers: "95%",
				grid: { gutters: 20 }
			},
			mobile: {
				grid: { gutters: 10 }
			}
		}*/
	});

/*
	skel
	.on("ready", function() {
		// Donne a la bannière la taille de la fenêtre (uniquement après DOM ready)
		var win_height = $(window).height();
		$('.wrapper.banner').css({height: win_height});
	})*/

/*
	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: 'css/style.css', containers: 1400, grid: { gutters: 50 } },
			wide:		{ range: '-1680', href: 'css/style-wide.css', containers: 1200, grid: { gutters: 40 } },
			normal:		{ range: '-1280', href: 'css/style-normal.css', containers: 960, lockViewport: true },
			narrow:		{ range: '-980', href: 'css/style-narrow.css', containers: '95%', grid: { gutters: 25 } },
			narrower:	{ range: '-840', href: 'css/style-narrower.css', grid: { collapse: true } },
			mobile:		{ range: '-640', href: 'css/style-mobile.css', containers: '90%', grid: { gutters: 15 } }
		}
	}, {
		layers: {
			layers: {
				navPanel: {
					animation: 'pushX',
					breakpoints: 'narrower',
					clickToClose: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="navList" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 275
				},
				titleBar: {
					breakpoints: 'narrower',
					height: 44,
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>',
					position: 'top-left',
					side: 'top',
					width: '100%'
				}
			}
		}
	});
/*/
	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until page has loaded.
			$body.addClass('loading');
			
			$window.on('load', function() {
				$body.removeClass('loading');
			});
						
		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {
				
				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});
		
				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Dropdowns.
			$('#main-nav > ul').dropotron({
				offsetY: -15,
				hoverDelay: 0
			});

/*
		// Dropdowns.
		$('#main-nav > ul').dropotron({
			selectorParent:     jQuery,     // Parent jQuery object
			baseZIndex:         1000,       // Base Z-Index
			menuClass:          'dropotron',// Menu class (assigned to every <ul>)
			expandMode:         'hover',    // Expansion mode ("hover" or "click")
			hoverDelay:         150,        // Hover delay (in ms)
			hideDelay:          250,        // Hide delay (in ms; 0 disables)
			openerClass:        'opener',   // Opener class
			openerActiveClass:  'active',   // Active opener class
			submenuClassPrefix: 'level-',   // Submenu class prefix
			mode:               'fade',     // Menu mode ("instant", "fade", "slide", "zoom")
			speed:              'fast',     // Menu speed ("fast", "slow", or ms)
			easing:             'swing',    // Easing mode ("swing", "linear")
			alignment:          'left',     // Alignment ("left", "center", "right")
			offsetX:            0,          // Submenu offset X
			offsetY:            0,          // Submenu offset Y
			globalOffsetY:      0,          // Global offset Y
			IEOffsetX:          0,          // IE Offset X
			IEOffsetY:          0,          // IE Offset Y
			noOpenerFade:       true,       // If true and mode = "fade", prevents top-level opener fade.
			detach:             true,       // Detach second level menus (prevents parent style bleed).
			cloneOnDetach:      true        // If true and detach = true, leave original menu intact.
		});
*/

	});

})(jQuery);