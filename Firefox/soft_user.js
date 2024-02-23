// Fichier qui regroupe les préférence du navigateur firefox pour le profil "soft"

// active les notifications web
user_pref("dom.webnotifications.enabled",	                true);

// désactive le dom api
user_pref("dom.enable_performance",		                    false);

// désactive la ressource timing API
user_pref("dom.enable_resource_timing",		                false);

// Ne donne pas de localisation précise
// (User Timing API)
user_pref("dom.enable_user_timing",			                false);

// Désactive la localisation 
user_pref("geo.enabled",					                false);

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

// Active la synthèse vocale
user_pref("media.webspeech.synth.enabled",			        true);

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

//