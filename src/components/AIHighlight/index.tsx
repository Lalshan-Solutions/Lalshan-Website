import Link from "next/link";
import BackgroundEffect from "@/components/Common/BackgroundEffect";

const AIHighlight = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto mb-14 max-w-[800px] text-center">
            <span className="mb-4 block text-lg font-bold uppercase tracking-wider text-primary">
              Powered By Intelligence
            </span>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Next-Gen <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              We leverage the full power of the modern AI ecosystem to build scalable, high-performance intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-10">
            {/* Block 1: Model Training */}
            <div className="rounded-xl bg-white p-8 shadow-one dark:bg-[#1D2144] hover:shadow-two duration-300">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Advanced Model Training
              </h3>
              <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                We design and train custom neural networks tailored to your specific domain data. Utilizing frameworks like <strong>PyTorch</strong> and <strong>TensorFlow</strong>, we specialize in:
              </p>
              <ul className="list-disc pl-5 text-base font-medium text-body-color space-y-2">
                <li>Fine-tuning foundational models (BERT, Llama 2, Mistral).</li>
                <li>Transfer learning for specialized tasks.</li>
                <li>Custom dataset curation and augmentation.</li>
              </ul>
            </div>

            {/* Block 2: Python Data Stack */}
            <div className="rounded-xl bg-white p-8 shadow-one dark:bg-[#1D2144] hover:shadow-two duration-300">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Robust Python Ecosystem
              </h3>
              <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                Our backend architecture relies on the industry-standard Python stack for data science and API development:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">FastAPI</span>
                <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Pandas</span>
                <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">NumPy</span>
                <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Scikit-learn</span>
                <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">LangChain</span>
              </div>
            </div>

            {/* Block 3: MLOps & Deployment */}
            <div className="rounded-xl bg-white p-8 shadow-one dark:bg-[#1D2144] hover:shadow-two duration-300">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Production-Grade MLOps
              </h3>
              <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                Moving models from notebook to production requires robust infrastructure. We ensure scalable and reliable deployment using:
              </p>
              <ul className="list-disc pl-5 text-base font-medium text-body-color space-y-2">
                <li>Containerization with <strong>Docker</strong> & orchestration via <strong>Kubernetes</strong>.</li>
                <li>Automated retraining pipelines and model versioning.</li>
                <li>Real-time inference API optimization.</li>
              </ul>
            </div>

            {/* Block 4: Generative AI & LLMs */}
            <div className="rounded-xl bg-white p-8 shadow-one dark:bg-[#1D2144] hover:shadow-two duration-300">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Generative AI & LLMs
              </h3>
              <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                Unlock creative potential and semantic understanding with our Generative AI expertise:
              </p>
              <ul className="list-disc pl-5 text-base font-medium text-body-color space-y-2">
                <li>RAG (Retrieval-Augmented Generation) systems.</li>
                <li>Advanced Prompt Engineering & Context Management.</li>
                <li>Integration with OpenAI, Anthropic, or open-source LLMs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHighlight;
