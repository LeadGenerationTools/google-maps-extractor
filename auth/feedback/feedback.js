chrome.runtime.onInstalled.addListener(function(a){"install"==a.reason&&(a=config.feedback_url,chrome.runtime.setUninstallURL&&chrome.runtime.setUninstallURL(a))});
