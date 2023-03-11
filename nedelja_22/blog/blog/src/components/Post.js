const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function Post() {
  return (
    <div>
      <div
        className="alert alert-dark bg-dark col-6 offset-3  text-light text-start mt-5"
        role="alert"
      >
        <h2>{lorem.generateWords(3)}</h2>
        <p>{lorem.generateSentences(2)}</p>
      </div>
    </div>
  );
}
