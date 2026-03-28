export const metadata = {
  title: "Disclaimer - PromptVerseAI",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Disclaimer</h1>

      <p className="text-gray-600 mb-4">
        The information provided on PromptVerseAI is for general informational 
        and educational purposes only. All prompts are shared in good faith 
        to help users generate AI content.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        AI Generated Results
      </h2>

      <p className="text-gray-600 mb-4">
        AI-generated outputs may vary depending on the tool, model, and 
        input used. PromptVerseAI does not guarantee specific results 
        from any prompt.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        No Professional Advice
      </h2>

      <p className="text-gray-600 mb-4">
        The prompts and content on this website do not constitute professional, 
        legal, or technical advice. Use them at your own discretion.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        External Links
      </h2>

      <p className="text-gray-600 mb-4">
        Our website may contain links to external websites. We are not 
        responsible for the content, accuracy, or reliability of any 
        third-party sites.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        Use at Your Own Risk
      </h2>

      <p className="text-gray-600">
        By using this website, you agree that PromptVerseAI is not liable 
        for any losses or damages resulting from the use of prompts 
        or generated content.
      </p>
    </div>
  );
}