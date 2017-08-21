var natural = require("natural");

// TODO filter garbage words
// swears
// emoji?
// muted topics
module.exports = function checkWordUsage(messages) {
  // input begins in object form
  // the mapping below makes each individual message an individual set of words
  // the goal being if you have a message that says "kappa kappa kappa" it shouldn't count 3 times
  // but if two people say kappa it should count twice. natural doesn't care about CaSiNg.
  // tokenize to array -> make the array unique -> join into a csv string that natural can parse
  messages = messages
    .map(x => {
      x = x.contents;
      // tokenizer splits words more aggressively-- which breaks hyperlinsk and stuff. not sure if its better.
      // let tok = new natural.WordTokenizer();
      // let tokenized = tok.tokenize(x.contents);
      let tokenized = x.split(" ");
      return Array.from(new Set(tokenized));
    })
    .join();

  // TfIdf == 'term frequency inverse document frequency'
  // https://en.wikipedia.org/wiki/Tf%E2%80%93idf
  // this is what happens when autists are allowed to name interfaces
  let TfIdf = natural.TfIdf;
  let tfidf = new TfIdf();
  tfidf.addDocument(messages);

  // tfidf.listTerms(0).forEach((x) => {
  //   console.log(JSON.stringify(x, null, 2));
  // });

  return tfidf.listTerms(0);
};
