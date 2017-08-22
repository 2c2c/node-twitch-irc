
export function formatBadges(badges) {
  if (!badges) {
    return "";
  }
  let attributes = [];

  if ("turbo" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/turbo.png");
  }
  if ("broadcaster" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/broadcaster.png");
  }
  if ("staff" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/staff.png");
  }
  if ("moderator" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/mod.png");
  }
  if ("global_mod" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/globalmod.png");
  }
  if ("admin" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/chat-badges/admin.png");
  }
  if ("premium" in badges) {
    attributes.push("https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/1");
  }

  return attributes
    .map(x => {
      return `<img class="badge" src="${x}">`;
    })
    .join("");
}
//from tmijs
export function formatEmotes(text, emotes) {
  var splitText = text.split("");
  for (var i in emotes) {
    var e = emotes[i];
    for (var j in e) {
      var mote = e[j];
      if (typeof mote === "string") {
        mote = mote.split("-");
        mote = [parseInt(mote[0]), parseInt(mote[1])];
        var length = mote[1] - mote[0],
          empty = Array.apply(null, new Array(length + 1)).map(function() {
            return "";
          });
        splitText = splitText
          .slice(0, mote[0])
          .concat(empty)
          .concat(splitText.slice(mote[1] + 1, splitText.length));
        splitText.splice(
          mote[0],
          1,
          '<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/' +
            i +
            '/3.0">'
        );
      }
    }
  }
  return splitText.join("");
}
