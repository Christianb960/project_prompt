import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p>
        Promptopia is an open source AI tool that generates prompts for creative
        writing, brainstorming, and more. It's a great way to get your creative
        juices flowing and come up with new ideas.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
