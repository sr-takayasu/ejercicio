window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#efefef",
        "text": "#404040"
      },
      "button": {
        "background": "#ffff00",
        "text": "#000"
      }
    },
    "type": "opt-in",
    "theme": "classic",
    "elements": { 
      "deny": '<a aria-label="deny cookies" tabindex="0" class="cc-btn cc-deny" id="deny">Rebutja</a>',

    },

    "content": {
      "message": "Escola de Fotografia utilitza cookies analítiques de tercers. Necessitem el seu consentiment explícit per poder utilitzar-les.",
      "allow": "Permet cookies",
      //"deny": "Rebutja",
      "link": "Política de cookies",
      "href": "politica-de-cookies.html",
      "policy": "Política de cookies",
    },
    onInitialise: function(status) {
      if(status == cookieconsent.status.allow) myScripts();
    },
    onStatusChange: function(status) {
      if (this.hasConsented()) myScripts();
      else {
          deleteCookies(this.options.cookie.name);
          location.reload();
      }
    }
  });

function deleteCookies(cookieconsent_name) {
        var keep = [cookieconsent_name, "DYNSRV"];

        document.cookie.split(';').forEach(function(c) {
            c = c.split('=')[0].trim();
            if (!~keep.indexOf(c))
                document.cookie = c + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
        });
};