(function(){
  const TRANSLATIONS = {
  "en": {
    "lang.name": "EN",
    "lang.label": "Language",
    "flavour.text": "Hey, let's pick a new project! :)",
    "input.placeholder": "Enter project name",
    "btn.add": "Add",
    "btn.import": "📂 Import",

    "lists.label": "List",
    "lists.new": "New list",
    "lists.rename": "Rename",
    "lists.delete": "Delete",

    "prompt.new_list": "New list name:",
    "prompt.rename_list": "Rename list:",
    "prompt.import_target": "Import into which list? Enter a name (new = create):",
    "confirm.delete_list": "Delete this list? (This cannot be undone.)",

    "toast.list_created": "List created: {name}",
    "toast.list_renamed": "List renamed.",
    "toast.list_deleted": "List deleted: {name}",
    "heading.progress": "In progress:",
    "heading.list": "My UFOs:",
    "btn.clear": "🗑 Clear all",
    "btn.roll": "🎲 Shuffle!",

    "heading.done": "Done:",
    "heading.history": "History:",
    "btn.clear_done": "🧹 Clear",
    "btn.clear_history": "🗑 Clear",
    "btn.copy_history": "📋 Copy",
    "btn.mark_done": "✅ Done",
    "btn.back": "↩️ Back",
    "btn.copy": "📋 Copy",
    "btn.undo": "Undo",

    "help.btn": "❓ Help",
    "help.title": "How to use RandomiseMe",
    "help.body": "1. Add projects manually or import a .txt/.csv list.<br><br>2. Tap <b>Shuffle</b> to randomly pick one project. The picked item moves to <b>In progress</b> automatically.<br><br>3. ✅ marks items as done, ↩️ sends them back to the list.<br><br>Imported lists may be separated by commas, semicolons, line breaks or tabs.<br><br>4. Use ☆/⭐ to set a priority (higher = picked more often).<br><br>5. 🗑 clears the active list (Done & History stay).<br><br>Your data is stored locally in your browser.",
    "help.update_hint": "If the Home Screen app does not update properly:",
    "help.reload": "🔄 Reload app",

    "footer.created": "RandomiseMe! – created by Nico Siedler",
    "footer.license": "v1.0 GPL3",

    "confirm.clear": "Clear all active projects? (Done & history stay.)",
    "confirm.clear_done": "Clear done list?",
    "confirm.clear_history": "Clear history?",

    "alert.no_projects": "No projects added yet!",
    "alert.import_finished": "Import finished: {count} new projects added.",
    "alert.import_restored": "(+{count} restored)",
    "alert.nothing_to_copy": "Nothing to copy yet.",

    "toast.copied": "Copied to clipboard.",
    "toast.deleted": "Deleted: {name}",
    "toast.done": "Marked as done: {name}",
    "toast.restored": "Restored: {name}",
    "toast.cleared_active": "Active list cleared.",
    "toast.cleared_done": "Done list cleared.",
    "toast.cleared_history": "History cleared.",

    "history.roll": "Rolled",
    "history.done": "Done",
    "history.restore": "Restored",
    "history.delete": "Deleted",

    "aria.delete": "Delete",
    "aria.done": "Mark as done",
    "aria.restore": "Restore",
    "aria.copy": "Copy",
    "aria.back": "Back to active",
    "aria.prio": "Priority",
    "aria.undo": "Undo",

    "btn.export": "⬇️ Export",
    "export.title": "Export",
    "export.hint": "Choose what to export:",
    "export.progress": "In progress",
    "export.active": "Active",
    "export.done": "Done",
    "export.history": "History",
    "export.txt": "⬇️ TXT",
    "export.csv": "⬇️ CSV",
    "export.grouped_note": "TXT is grouped by tags.",
    "export.ungrouped": "Ungrouped",
    "aria.group": "Set group",
    "prompt.group": "Group / tag (empty = remove):",
    "toast.exported": "Export created.",
    "toast.group_set": "Group set: {group}",
    "toast.group_cleared": "Group removed.",
    "toast.prio_set": "Priority: {prio}",
    "toast.prio_cleared": "Priority cleared.",

    "empty.hint": "Add items or import a list to get started.",

    "filter.all": "All",
    "filter.untagged": "Untagged",
    "filter.scope": "Shuffling {count} of {total}",
    "tag.title": "Set Tag",
    "tag.placeholder": "New tag name…",
    "tag.apply": "Apply",
    "tag.remove": "Remove tag",
    "tag.existing": "Existing tags:",

    "exclamations": [
      "Oh look:",
      "Take that:",
      "Guess what:",
      "Plot twist:",
      "Lucky you:",
      "Here we go:",
      "Ta-da:",
      "Et voilà:"
    ]
  },

  "de": {
    "lang.name": "DE",
    "lang.label": "Sprache",
    "flavour.text": "Hallo, lass uns ein Projekt finden! :)",
    "input.placeholder": "Projekt eingeben",
    "btn.add": "Hinzufügen",
    "btn.import": "📂 Import",

    "lists.label": "Liste",
    "lists.new": "Neue Liste",
    "lists.rename": "Umbenennen",
    "lists.delete": "Löschen",

    "prompt.new_list": "Name der neuen Liste:",
    "prompt.rename_list": "Liste umbenennen:",
    "prompt.import_target": "In welche Liste importieren? Name eingeben (neu = anlegen):",
    "confirm.delete_list": "Diese Liste löschen? (Kann nicht rückgängig gemacht werden.)",

    "toast.list_created": "Liste erstellt: {name}",
    "toast.list_renamed": "Liste umbenannt.",
    "toast.list_deleted": "Liste gelöscht: {name}",
    "heading.progress": "In Arbeit:",
    "heading.list": "Meine UFOs:",
    "btn.clear": "🗑 Alle löschen",
    "btn.roll": "🎲 Los!",

    "heading.done": "Erledigt:",
    "heading.history": "Verlauf:",
    "btn.clear_done": "🧹 Löschen",
    "btn.clear_history": "🗑 Löschen",
    "btn.copy_history": "📋 Kopieren",
    "btn.mark_done": "✅ Erledigt",
    "btn.back": "↩️ Zurück",
    "btn.copy": "📋 Kopieren",
    "btn.undo": "Rückgängig",

    "help.btn": "❓ Hilfe",
    "help.title": "So funktioniert RandomiseMe",
    "help.body": "1. Projekte manuell hinzufügen oder eine .txt/.csv-Liste importieren.<br><br>2. Auf <b>Los!</b> tippen, um zufällig ein Projekt auszuwählen. Das gezogene Projekt wandert automatisch nach <b>In Arbeit</b>.<br><br>3. ✅ markiert als erledigt, ↩️ holt es zurück in die aktive Liste.<br><br>Importierte Listen dürfen durch Kommata, Semikola, Zeilenumbrüche oder Tabs getrennt sein.<br><br>4. Mit ☆/⭐ wird eine Priorität gesetzt (höher = wird öfter gezogen).<br><br>5. 🗑 setzt die aktive Liste zurück (Erledigt & Verlauf bleiben erhalten).<br><br>Die Liste wird lokal im Browser gespeichert.",
    "help.update_hint": "Falls die Homescreen-App sich nicht richtig aktualisiert:",
    "help.reload": "🔄 App neu laden",

    "footer.created": "RandomiseMe! – erstellt von Nico Siedler",
    "footer.license": "v1.0 GPL3",

    "confirm.clear": "Alle aktiven Projekte löschen? (Erledigt & Verlauf bleiben.)",
    "confirm.clear_done": "Erledigt-Liste wirklich leeren?",
    "confirm.clear_history": "Verlauf wirklich löschen?",

    "alert.no_projects": "Noch keine Projekte hinzugefügt!",
    "alert.import_finished": "Importiert: {count} neue Projekte hinzugefügt.",
    "alert.import_restored": "(+{count} wiederhergestellt)",
    "alert.nothing_to_copy": "Nichts zum Kopieren.",

    "toast.copied": "In die Zwischenablage kopiert.",
    "toast.deleted": "Gelöscht: {name}",
    "toast.done": "Als erledigt markiert: {name}",
    "toast.restored": "Wiederhergestellt: {name}",
    "toast.cleared_active": "Aktive Liste geleert.",
    "toast.cleared_done": "Erledigt-Liste geleert.",
    "toast.cleared_history": "Verlauf gelöscht.",

    "history.roll": "Gewürfelt",
    "history.done": "Erledigt",
    "history.restore": "Wiederhergestellt",
    "history.delete": "Gelöscht",

    "aria.delete": "Löschen",
    "aria.done": "Als erledigt markieren",
    "aria.restore": "Wiederherstellen",
    "aria.copy": "Kopieren",
    "aria.back": "Zurück zu Aktiv",
    "aria.prio": "Priorität",
    "aria.undo": "Rückgängig",

    "btn.export": "⬇️ Export",
    "export.title": "Export",
    "export.hint": "Was soll exportiert werden?",
    "export.progress": "In Arbeit",
    "export.active": "Aktiv",
    "export.done": "Erledigt",
    "export.history": "Verlauf",
    "export.txt": "⬇️ TXT",
    "export.csv": "⬇️ CSV",
    "export.grouped_note": "TXT wird nach Tags gruppiert.",
    "export.ungrouped": "Ohne Tag",
    "aria.group": "Gruppe/Tag setzen",
    "prompt.group": "Gruppe/Tag (leer = entfernen):",
    "toast.exported": "Export erstellt.",
    "toast.group_set": "Gruppe gesetzt: {group}",
    "toast.group_cleared": "Gruppe entfernt.",
    "toast.prio_set": "Priorität: {prio}",
    "toast.prio_cleared": "Priorität entfernt.",

    "empty.hint": "Füge Einträge hinzu oder importiere eine Liste.",

    "filter.all": "Alle",
    "filter.untagged": "Ohne Tag",
    "filter.scope": "{count} von {total} werden gemischt",
    "tag.title": "Tag setzen",
    "tag.placeholder": "Neuer Tag-Name…",
    "tag.apply": "Übernehmen",
    "tag.remove": "Tag entfernen",
    "tag.existing": "Vorhandene Tags:",

    "exclamations": [
      "Schau mal:",
      "Bäm:",
      "Na bitte:",
      "Rate mal:",
      "Plot Twist:",
      "Glück gehabt:",
      "Auf geht's:",
      "Tadaa:",
      "Et voilà:"
    ]
  }
};

  const FALLBACK_LANG = "en";

  function normalizeLang(lang) {
    if (!lang) return FALLBACK_LANG;
    lang = lang.toLowerCase();
    if (TRANSLATIONS[lang]) return lang;
    const base = lang.split("-")[0];
    if (TRANSLATIONS[base]) return base;
    return FALLBACK_LANG;
  }

  function detectLang() {
    const saved = localStorage.getItem("lang");
    if (saved) return normalizeLang(saved);
    const nav = (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) || FALLBACK_LANG;
    return normalizeLang(nav);
  }

  let currentLang = detectLang();

  function t(key, vars) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[FALLBACK_LANG];
    let val = (dict && dict[key] !== undefined) ? dict[key] : (TRANSLATIONS[FALLBACK_LANG][key] !== undefined ? TRANSLATIONS[FALLBACK_LANG][key] : key);

    if (Array.isArray(val)) return val;

    if (typeof val === "string" && vars) {
      Object.keys(vars).forEach(k => {
        val = val.replaceAll("{" + k + "}", String(vars[k]));
      });
    }
    return val;
  }

  function applyTranslations() {
    document.documentElement.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = currentLang.toUpperCase();
  }

  function setLang(lang) {
    currentLang = normalizeLang(lang);
    localStorage.setItem("lang", currentLang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: currentLang } }));
  }

  function toggleLang() {
    const next = currentLang === "en" ? "de" : "en";
    setLang(next);
  }

  window.i18n = { t, setLang, getLang: () => currentLang, available: () => Object.keys(TRANSLATIONS), toggleLang };

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", () => toggleLang());
    }
    applyTranslations();
  });
})();
