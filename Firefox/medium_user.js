// Fichier qui regroupe les préférence du navigateur firefox pour le profil "medium"

// Désactive les notifications web
user_pref("dom.webnotifications.enabled",	                false);

// Désactive le dom api
user_pref("dom.enable_performance",		                    true);

// désactive la ressource timing API
user_pref("dom.enable_resource_timing",		                false);

// Ne donne pas de localisation précise
// (User Timing API)
user_pref("dom.enable_user_timing",			                false);

// Désactive la localisation 
user_pref("geo.enabled",					                false);

// Active l'API AudioWeb
user_pref("dom.webaudio.enabled",				            true);

// Force localisation par wifi sur le
// serveur mozilla
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// Empêche la création de logs des 
//requêtes de localisation
user_pref("geo.wifi.logging.enabled",                       false);

// Empêche l'utilisation de MozTCPSocket
user_pref("dom.mozTCPSocket.enabled",				        false);

// Désactive le leak d'information
// a propos des informations de 
// connexions
user_pref("dom.netinfo.enabled",				            false);

// Active WebRTC
user_pref("media.peerconnection.enabled",			        true);

// Désactive le leak de l'addresse IP
// par WebRTC   
user_pref("media.peerconnection.ice.default_address_only",	true);  // Firefox 42-51
user_pref("media.peerconnection.ice.no_host",			    true);  // Firefox >= 52

// Désactive la capture vidéo et le partage
// d'écran pour WebRTC
user_pref("media.navigator.enabled",				        false);
user_pref("media.navigator.video.enabled",			        false);
user_pref("media.getusermedia.screensharing.enabled",		false);
user_pref("media.getusermedia.audiocapture.enabled",		false);

// Désactive l'API batterie
user_pref("dom.battery.enabled",				            false);

// Désactive l'API de téléphonie
user_pref("dom.telephony.enabled",				            false);

// Désactive les requêtes Beacon
user_pref("beacon.enabled",					                false);

// Active les copy/paste par touches CTRL
user_pref("dom.event.clipboardevents.enabled",			    true);

// Active la fonction "copy to clipboard"
user_pref("dom.allow_cut_copy",                             true);

// Désactive la reconnaissance vocale
user_pref("media.webspeech.recognition.enable",			    false);

// Désactive la synthèse vocale
user_pref("media.webspeech.synth.enabled",			        false);

// Désactive l'API Sensor
user_pref("device.sensors.enabled",				            false);

// Désactive le ping sur lien Hypertexte
user_pref("browser.send_pings",					            false);

// Si le ping est activé, autoriser uniquement
// sur le même site que la page d'origine
user_pref("browser.send_pings.require_same_host",		    true);

// Active IndexDB
user_pref("dom.indexedDB.enabled",		                    true);

// Désactive l'API Gamepad pour empêcher
// l'énumération de périphériques USB
user_pref("dom.gamepad.enabled",				            false);

// Désactive l'API des appreils VR 
user_pref("dom.vr.enabled",				                	false);

// Désactive l'API de vibration(mobile uniquement)
user_pref("dom.vibrator.enabled",                           false);

// Active WebGL
user_pref("webgl.disabled",					                false);

// Si WebGL est activé, utiliser le mode minimal
user_pref("webgl.min_capability_mode",			        	true);

// Désactive les extensions WebGL
user_pref("webgl.disable-extensions",				        true);

// Ne force pas l'utilisation de WebGL si l'accélération 
// matérielle n'est pas activée
user_pref("webgl.disable-fail-if-major-performance-caveat",	false);

// Empêche l'exposition d'information à propos des
// drivers graphiques 
user_pref("webgl.enable-debug-renderer-info",			    false);

// Active le spoofing d'une machine avec 2 coeurs
user_pref("dom.maxHardwareConcurrency",				        2);

// DésActive Web Assembly
user_pref("javascript.options.wasm",				        false);

// Désactive la reconnaissance faciale  
user_pref("camera.control.face_detection.enabled",		    false);

// Désactive la recherche localisée (GeoIp)
user_pref("browser.search.countryCode",				        "FR");
user_pref("browser.search.region",				            "FR");
user_pref("browser.search.geoip.url",				        "");

// Force l'utilisation de l'heure et date Firefox comme
// heure locale
user_pref("intl.locale.matchOS",				            false);

// Désactive le moteur de recherche par défaut suivant
// la localisation 
user_pref("browser.search.geoSpecificDefaults",			    false);

// Laisse l'envoi automatique de la sélection
// vers le presse papier sur linux
user_pref("clipboard.autocopy",					            true);

// Empêche la transmission de la date et de 
// L'heure par JavaScript   
user_pref("javascript.use_us_english_locale",			    true);

// Autorise la validation d'un url invalide saisi
// dans la barre de recherche
user_pref("keyword.enabled",					            true);

// Ne coupe pas les "http" dans la barre de recherche
user_pref("browser.urlbar.trimURLs",				        false);

// Désactive le préchargement des url autocomplétés
user_pref("browser.urlbar.speculativeConnect.enabled",      false);

// Autorise le remplacement d'un nom de domaine saisi
// invalide
user_pref("browser.fixup.alternate.enabled",		    	true);

// Autorise la gestion automatique du mode hors ligne
// par le navigateur
user_pref("network.manage-offline-status",			        true);

// Bloque le contenu mixte actif sur les pages
user_pref("security.mixed_content.block_active_content",	true);

// Bloque le contenu mixte passif sur les pages
user_pref("security.mixed_content.block_display_content",	true);

// Bloquage des fichier non sur ouverts par des Jar
user_pref("network.jar.open-unsafe-types",			        false);

// Bloque l'exécution de plugins avec des privilèges
// étendues 
user_pref("security.xpconnect.plugin.unrestricted",		    false);

//  Active la politique d'origine strict
user_pref("security.fileuri.strict_origin_policy",		    true);

//  Autorise l'affichage de Javascript dans l'historique
user_pref("browser.urlbar.filter.javascript",			    false);

// Désactive la prise en charge d'asm.js qui permet 
// l'exécution de script écrit dans des languages 
// de bas niveau (utilisé pour le jeux)
user_pref("javascript.options.asmjs",			        	false);

// Autorise les polices SVG
user_pref("gfx.font_rendering.opentype_svg.enabled",		true);

// Autorise les images SVG
user_pref("svg.disabled",                                   false);

// Désactive les statistiques de lectures de vidéos
user_pref("media.video_stats.enabled",				        false);

// Override le numéro de Build du navigateur, ici par
// un numéro de build de navigateut Tor
user_pref("general.buildID.override",				        "20100101");
user_pref("browser.startup.homepage_override.buildID",		"20100101");

// Désactive les polices spécifiques au documents
user_pref("browser.display.use_document_fonts",			    0);

// Demande une validation pour l'installation de plugin
user_pref("security.dialog_enable_delay",			        1000);

// Autorise l'installation de plugin non signés par mozilla
user_pref("xpinstall.signatures.required",		            false);

// Bloques les mises a jour des métadonnées des add-ons
user_pref("extensions.getAddons.cache.enabled",			    false);

// Désengagement des thèmes
user_pref("lightweightThemes.update.enabled",			    false);

// Bloque les rapports d'erreur flash player
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);

// Si les rapports d'erreur sont activés, ne pas envoyer
// l'url consulté 
user_pref("dom.ipc.plugins.reportCrashURL",			        false);

// Si flash est installé, utiliser la blocklist fournie
// par Mozilla
user_pref("browser.safebrowsing.blockedURIs.enabled",       true);

// Autorise la mise a jour automatique des add-ons
user_pref("extensions.update.enabled",			        	true);

// Active les blocklist de Mozilla pour les add-ons et 
// certificats 
user_pref("extensions.blocklist.enabled",			        true);
user_pref("services.blocklist.update_enabled",			    true);

// Diminue les envois d'informations sur le système
// vers les blocklist de Mozilla
user_pref("extensions.blocklist.url",				"https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// Désactive la mise a jour des add ons système de
// Firefox 
user_pref("extensions.systemAddon.update.enabled",	    	false);

// Désactive la recommendation d'extension par Firefox
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr",	false);

// Désactive la télémétrie Mozilla et les feature
// expérimentales
user_pref("toolkit.telemetry.enabled",				        false);
user_pref("toolkit.telemetry.unified",				        false);
user_pref("toolkit.telemetry.archive.enabled",			    false);
user_pref("experiments.supported",				            false);
user_pref("experiments.enabled",				            false);
user_pref("experiments.manifest.uri",				        "");

// Désactive les rapport d'erreur vers Mozilla 
user_pref("breakpad.reportURL",				            	"");

// Désactive les rapports d'erreurs pour les onglets 
// crashés
user_pref("browser.tabs.crashReporting.sendReport",		    false);
user_pref("browser.crashReports.unsubmittedCheck.enabled",	false);

// Désactive la découverte FlyWeb d'appareils à proximité
user_pref("dom.flyweb.enabled",		            			false);

// Acvite la portection au tracking
user_pref("privacy.trackingprotection.enabled",			    true);
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// Active le mode anti-empreite de Firefox 
user_pref("privacy.resistFingerprinting",		        	true);

// Désactive la page "about:blank" au démarrage
user_pref("browser.startup.blankWindow",                    false);

// Autorise le viewer pdf intégré
user_pref("pdfjs.disabled",				                	false);

// Désactive l'envoi des rapports de santé
user_pref("datareporting.healthreport.uploadEnabled",		false);
user_pref("datareporting.healthreport.service.enabled",		false);
user_pref("datareporting.policy.dataSubmissionEnabled",		false);

// Bloque les recommendation d'extension personnalisée
user_pref("browser.discovery.enabled",				        false);

// Désactive la télémétrie Firefox (Shield/Hearbeat/Normandy)
user_pref("app.normandy.enabled",                           false);
user_pref("app.normandy.api_url",                           "");
user_pref("extensions.shield-recipe-client.enabled",		false);
user_pref("app.shield.optoutstudies.enabled",			    false);

// Désactive Firefox Hello
user_pref("loop.enabled",		                            false);

// Bloque la collecte de données métrique par
// Firefox Hello 
user_pref("loop.logDomains",					            false);

// DésActive les mises a jour automatiques 
user_pref("app.update.auto",					            false);

// Ne pas imposer la vérification des mises a jour 
user_pref("app.update.enabled",                             false);

// Bloquer les forges web connues
user_pref("browser.safebrowsing.enabled",			        true); 
user_pref("browser.safebrowsing.phishing.enabled",		    true);

// Bloque les sites reported comme attaquants 
user_pref("browser.safebrowsing.malware.enabled",		    true);

// Bloque les requêtes vers l'application de réputation
// de Google pour les téléchargement de fichier binaires
user_pref("browser.safebrowsing.downloads.remote.enabled",	false);

// Désactive Pocket (compte nécéssaire)
user_pref("browser.pocket.enabled",				            false);
user_pref("extensions.pocket.enabled",				        false);

// Désactive les recommandations de Pocket dans Firefox
// Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);

// Ferme la session utilisateur au bout de 90 secondes sur
// un site (désactivé)
//user_pref("network.http.keep-alive.timeout",			    90);

// Désactive le Pré-chargment des lient "next"
user_pref("network.prefetch-next",				            false);

// DésActive le pré chargement des DNS
user_pref("network.dns.disablePrefetch",			        true);
user_pref("network.dns.disablePrefetchFromHTTPS",		    true);

// Désactive le service de prédiction Necko
user_pref("network.predictor.enabled",				        false);

// Rejeter les noms de domaines en .onion
user_pref("network.dns.blockDotOnion",			        	true);

// Désactive les suggestions de recherches dans la barre
// de navigation 
user_pref("browser.search.suggest.enabled",			        false);

// Désactives les suggestions en fonction de la
// localisation
user_pref("browser.urlbar.suggest.searches",			    false);

// Désactive les suggestions de Firefox
user_pref("browser.urlbar.groupLabels.enabled",             false);

// Désactive le protocole SSDP
user_pref("browser.casting.enabled",				        false);

// Bloque le chargement du codec OpenH264
user_pref("media.gmp-gmpopenh264.enabled",			        false);
user_pref("media.gmp-manager.url",				            "");

// Désactive les téléchargement des snippets de la
// page d'acceuil
user_pref("browser.aboutHomeSnippets.updateUrl",		    "");

// Désactive la recherche des mises a jours du moteur de recherche
user_pref("browser.search.update",				            false);

// Désactive la recherche de portails captifs
user_pref("network.captive-portal-service.enabled",		    false);

// Active la politique de sécurité CSP 
user_pref("security.csp.enable",				            true);

// Empêche les cookies tiers de persister a la fin de la session
user_pref("network.cookie.thirdparty.sessionOnly",		    true);

// Ne télécharge pas les Urls pour les pages hors-ligne
user_pref("browser.cache.offline.enable",			        false);

// Nettoyer l'historique de navigation à la fermeture
user_pref("privacy.sanitize.sanitizeOnShutdown",		    true);
user_pref("privacy.clearOnShutdown.cache",			        true);
user_pref("privacy.clearOnShutdown.cookies",			    false); //voir 450
user_pref("privacy.clearOnShutdown.downloads",			    true);
user_pref("privacy.clearOnShutdown.formdata",			    true);
user_pref("privacy.clearOnShutdown.history",			    true);
user_pref("privacy.clearOnShutdown.offlineApps",		    true);
user_pref("privacy.clearOnShutdown.sessions",			    true);
user_pref("privacy.clearOnShutdown.openWindows",		    true);

// Timeline par défaut de suppression d'historique à "tout"
user_pref("privacy.sanitize.timeSpan",			        	0);

// Ne pas nettoyer les préférences de sites
user_pref("privacy.cpd.offlineApps",				        true);
user_pref("privacy.cpd.cache",					            true);
user_pref("privacy.cpd.cookies",				            true);
user_pref("privacy.cpd.downloads",				            true);
user_pref("privacy.cpd.formdata",				            true);
user_pref("privacy.cpd.history",				            true);
user_pref("privacy.cpd.sessions",				            true);

// Ne pas se rappeler de l'historique de navigation
user_pref("places.history.enabled",				            false);

//Désactive le cache sur disque
user_pref("browser.cache.disk.enable",				        false);

// Désactive la mise en cache des pages SSL
user_pref("browser.cache.disk_cache_ssl",			        false);

// Désactive l'historique de téléchargement
user_pref("browser.download.manager.retention",		        0);

//  Ne pas Désactive le gestionnaire de mot de passe
user_pref("signon.rememberSignons",				            true);

// Désactiver l'autocompletion de formualaire
user_pref("browser.formfill.enable",				        false);

// Supprimer les cookies à la fermeture de session
user_pref("network.cookie.lifetimePolicy",			        2);

// Nécessite une intervention manuelle pour l'autocompletion
// des username/password dans les formulaire
user_pref("signon.autofillForms",				            false);

// Désactive la capture de login hors formulaire 
user_pref("signon.formlessCapture.enabled",			        false);

// Supprime les fichiers temporaires lors de la fermeture
user_pref("browser.helperApps.deleteTempFileOnExit",		true);

// Ne pas créer de capture d'écran des pages visitées
user_pref("browser.pagethumbnails.capturing_disabled",		true);

// BLoquer le stockage des favicons pour windows
user_pref("browser.shell.shortcutFavicons",					false);

// Bloquer la récupération des favoris (max 5) 
user_pref("browser.bookmarks.max_backups",                  0);

// Autoriser le téléchargement d'icones 
user_pref("browser.chrome.site_icons",				        true);

// Active l'avertissement de mot de passe non sécurisé
user_pref("security.insecure_password.ui.enabled",		    true);

// Désaactive le téléchargement sur le bureau
user_pref("browser.download.folderList",			        2);

// Bloque la page d'acceuil de firefox et affiche une page vide
user_pref("browser.newtabpage.enabled",				        false);
user_pref("browser.newtab.url",					            "about:blank");

// Bloque les snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets",	false);

// Bloque la publicité sur la page d'acceuil ainsi que son
// préchargement
user_pref("browser.newtabpage.enhanced",			        false);
user_pref("browser.newtab.preload",				            false);
user_pref("browser.newtabpage.directory.ping",			    "");
user_pref("browser.newtabpage.directory.source",		    "data:text/plain,{}");

// Désactive la publicité pour le VPN de Mozilla sur la page
// about:protection
user_pref("browser.vpn_promo.enabled",		                false);

// Active la notification de plungin obsolète
user_pref("plugins.update.notifyUser",				        true);

// Bloque l'autocomplétion dans la barre de recherche
user_pref("browser.urlbar.autoFill",				        false);
user_pref("browser.urlbar.autoFill.typed",			        false);

// Bloque l'autocomplétion dans la barre d'url +
// la complétion liée à l'historique et aux favoris
user_pref("browser.urlbar.autocomplete.enabled",		    false);

// Ne pas vérifier que Firefox soit le navigateur par défaut
user_pref("browser.shell.checkDefaultBrowser",			    false);

// Fermer le gestionnaire de mot de passe périodiquement
user_pref("security.ask_for_password",				        2);

// Fermer le gestionnaire de mot de passe toutes les 5 minutes
user_pref("security.password_lifetime",				        5);

// Bloquer les notification pour le sites qui offrent des 
// données hors ligne
user_pref("browser.offline-apps.notify",		        	false);
