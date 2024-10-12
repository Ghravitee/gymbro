import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import roadmapImage from "../assets/roadmap-image.png";
import roadmapImage1 from "../assets/roadmap-image-1.png";

const Roadmap = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 bg-black">
      <div className="hidden md:block max-w-[1200px] mx-auto px-4">
        <div className="relative mb-10 md:mb-20 w-full md:w-[30%] h-6 flex justify-center items-center mx-auto">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] uppercase bungee text-white">
            Roadmap
          </h2>
          <div className="w-[50%] md:w-[25%] h-1 absolute -top-7 bg-white" />
        </div>

        {/* Phases Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {/* Phase Left */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col px-2 md:px-0 ">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                viewport={{ once: true }}
                className="text-white flex flex-col gap-4 border border-white rounded-2xl px-4 py-4 md:border-none md:px-0 md:py-0"
              >
                <h1 className="mt-4 md:mt-[1.8rem] bungee text-left text-[1.2rem] md:text-[1.5rem] ">
                  Phase 1: Launch & Awareness
                </h1>
                <p className="text-sm md:text-xl">
                  • Token Launch on Solana (Q4 2024):
                </p>
                <p className="text-sm md:text-xl">
                  • Launch Gymbro on Solana with a humorous gym-based meme
                  narrative to appeal to fitness enthusiasts.
                </p>
                <p className="text-sm md:text-xl">
                  • Create a strong online presence across platforms like
                  Twitter, Instagram, and TikTok, leveraging memes, fitness
                  tips, and community engagement.
                </p>
                <p className="text-sm md:text-xl">
                  • Community Building (Q4 2024):
                </p>
                <p className="text-sm md:text-xl">
                  • Incentivize early adopters with token airdrops, challenges,
                  and gym-related giveaways.
                </p>
                <p className="text-sm md:text-xl">
                  • Foster a fitness-driven community by collaborating with
                  fitness influencers to promote the token.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                viewport={{ once: true }}
                className="text-white flex flex-col gap-4 mt-16 md:mt-32 border border-white rounded-2xl px-4 py-4 md:border-none md:px-0 md:py-0"
              >
                <h1 className="mt-6 md:mt-[2.3rem] bungee text-left text-[1.2rem] md:text-[1.5rem]">
                  Phase 3: Supplements & Utility
                </h1>
                <p className="text-sm md:text-xl">
                  • Gymbro Supplement Line (Q2 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Partner with supplement manufacturers to release a
                  Gymbro-branded supplement line, including pre-workouts,
                  protein powders, and recovery products.
                </p>
                <p className="text-sm md:text-xl">
                  • Introduce a discount model where token holders get reduced
                  prices on Gymbro supplements.
                </p>
                <p className="text-sm md:text-xl">
                  • Token Utility Expansion (Q2 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Implement token utility within the Gymbro ecosystem. Holders
                  can:
                </p>
                <p className="text-sm md:text-xl">
                  • Earn rewards for fitness challenges and achievements (e.g.,
                  completing gym programs).
                </p>
                <p className="text-sm md:text-xl">
                  • Redeem tokens for gym-related products, supplements, or
                  memberships.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                viewport={{ once: true }}
                className="text-white flex flex-col gap-4 mt-16 md:mt-32 border border-white rounded-2xl px-4 py-4 md:border-none md:px-0 md:py-0"
              >
                <h1 className="mt-6 md:mt-[2.3rem] bungee text-left text-[1.2rem] md:text-[1.5rem]">
                  Phase 5: Long-Term Vision & Growth
                </h1>
                <p className="text-sm md:text-xl">
                  • Ecosystem Expansion (Q4 2025 and beyond):
                </p>
                <p className="text-sm md:text-xl">
                  • Explore integration with metaverse platforms to offer
                  virtual gym experiences and fitness NFTs.
                </p>
                <p className="text-sm md:text-xl">
                  • Collaborate with fitness app developers to incorporate
                  Gymbro token rewards into fitness tracking apps.
                </p>
              </motion.div>
            </div>

            <div className="hidden md:flex flex-col">
              <div className="w-[7rem] h-[6px] bg-gradient-to-r from-[#14F195] to-[#4B0082] mt-10" />
              <div className="w-[7rem] h-[6px] bg-gradient-to-r from-[#14F195] to-[#4B0082] mt-[38rem]" />
              <div className="w-[7rem] h-[6px] bg-gradient-to-r from-[#14F195] to-[#4B0082] mt-[41.5rem]" />
            </div>

            <div className="hidden md:block w-2 h-[100rem] bg-gradient-to-t from-[#14F195] to-[#4B0082] transform -skew-y-[45deg]" />
          </div>

          {/* Phase Right */}
          <div className="flex flex-row-reverse justify-center md:justify-start mt-10 md:mt-20">
            <div className="flex flex-col px-2 md:px-0">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("left", "tween", 0.5, 0.5)}
                viewport={{ once: true }}
                className="text-white flex flex-col gap-4 max-w-full md:max-w-[40rem] ml-0 md:ml-10 mt-[3rem] md:mt-[12rem] border border-white rounded-2xl px-4 py-4 md:border-none md:px-0 md:py-0"
              >
                <h1 className="mt-6 md:mt-[2rem] bungee text-left text-[1.2rem] md:text-[1.5rem]">
                  Phase 2: Gym Partnerships & Merchandise
                </h1>
                <p className="text-sm md:text-xl">
                  • Gym Partnerships (Q1 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Begin partnerships with local gyms, offering Gymbro holders
                  exclusive gym memberships, discounts, or access to fitness
                  classes.
                </p>
                <p className="text-sm md:text-xl">
                  • Position Gymbro as a lifestyle brand where holders are part
                  of a fitness-focused movement.
                </p>
                <p className="text-sm md:text-xl">
                  • Launch Gymbro Merchandise (Q1 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Introduce a Gymbro merchandise line, featuring gym wear,
                  accessories, and fitness gear.
                </p>
                <p className="text-sm md:text-xl">
                  • Use a portion of token sales to provide discounts on Gymbro
                  merchandise to holders.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("left", "tween", 0.5, 0.5)}
                viewport={{ once: true }}
                className="text-white flex flex-col gap-4 max-w-full md:max-w-[20rem] mt-16 md:mt-32 ml-0 md:ml-10 border border-white rounded-2xl px-4 py-4 md:border-none md:px-0 md:py-0"
              >
                <h1 className="mt-6 md:mt-[1rem] bungee text-left text-[1.2rem] md:text-[1.5rem]">
                  Phase 4: Expansion & Sustainability
                </h1>
                <p className="text-sm md:text-xl">
                  • Global Gym Partnerships (Q3 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Expand partnerships to international gym chains, allowing
                  Gymbro token holders to access discounts and promotions
                  worldwide.
                </p>
                <p className="text-sm md:text-xl">
                  • Sustainable Fitness Initiatives (Q3 2025):
                </p>
                <p className="text-sm md:text-xl">
                  • Invest in sustainability projects, such as creating
                  eco-friendly gym spaces or offering carbon-offset programs for
                  token holders.
                </p>
              </motion.div>
            </div>
            <div className="hidden md:flex flex-col">
              <div className="w-[7rem] h-[6px] bg-gradient-to-r from-[#14F195] to-[#4B0082] mt-[15rem]" />
              <div className="w-[7rem] h-[6px] bg-gradient-to-r from-[#14F195] to-[#4B0082] mt-[38rem]" />
            </div>

            <div className="hidden md:block w-2 h-[100rem] bg-gradient-to-t from-[#14F195] to-[#4B0082] transform -skew-y-[45deg]" />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      {/* Mobile view */}
      {/* Mobile view */}
      {/* Mobile view */}

      <div className="md:hidden max-w-[1200px] mx-auto px-4">
        <div className="relative mb-10 md:mb-20 w-full md:w-[30%] h-6 flex justify-center items-center mx-auto">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] uppercase bungee text-white">
            Roadmap
          </h2>
          <div className="w-[50%] md:w-[25%] h-1 absolute -top-7 bg-white" />
        </div>

        {/* Phases Layout */}
        <div className="flex flex-col gap-[2px]">
          {/* Phase 1: Launch & Awareness */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="text-white flex flex-col border border-white rounded-2xl px-4 py-4"
          >
            <h1 className="mt-4 bungee text-left text-[1.2rem] md:text-[1.5rem]">
              Phase 1: Launch & Awareness
            </h1>
            <p className="text-xl md:text-xl">
              • Token Launch on Solana (Q4 2024):
            </p>
            <p className="text-xl md:text-xl">
              • Launch Gymbro on Solana with a humorous gym-based meme narrative
              to appeal to fitness enthusiasts.
            </p>
            <p className="text-xl md:text-xl">
              • Community Building (Q4 2024):
            </p>
            <p className="text-xl md:text-xl">
              • Foster a fitness-driven community by collaborating with fitness
              influencers.
            </p>
          </motion.div>
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-white h-10 w-1" />
            </div>
            <div>
              <div className="w-full h-1 bg-white" />
              <div className="bg-white mx-auto w-6 h-6 rounded-full -translate-y-4"></div>
            </div>
          </div>
          <img src={roadmapImage} className="w-[60%] mx-auto" />
          <div className="transform rotate-180">
            <div className="flex justify-center items-center">
              <div className="bg-white h-10 w-1" />
            </div>
            <div>
              <div className="w-full h-1 bg-white" />
              <div className="bg-white mx-auto w-6 h-6 rounded-full -translate-y-4"></div>
            </div>
          </div>

          {/* Phase 2: Gym Partnerships & Merchandise */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="text-white flex flex-col gap-4 border border-white rounded-2xl px-4 py-4"
          >
            <h1 className="mt-6 bungee text-left text-[1.2rem] md:text-[1.5rem]">
              Phase 2: Gym Partnerships & Merchandise
            </h1>
            <p className="text-xl md:text-xl">• Gym Partnerships (Q1 2025):</p>
            <p className="text-xl md:text-xl">
              • Offer exclusive gym memberships and discounts for token holders.
            </p>
            <p className="text-xl md:text-xl">
              • Launch Gymbro Merchandise (Q1 2025):
            </p>
            <p className="text-xl md:text-xl">
              • Introduce a Gymbro merchandise line featuring gym wear and
              accessories.
            </p>
          </motion.div>

          {/* Phase 3: Supplements & Utility */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="text-white flex flex-col gap-4 mt-8 border border-white rounded-2xl px-4 py-4"
          >
            <h1 className="mt-6 bungee text-left text-[1.2rem] md:text-[1.5rem]">
              Phase 3: Supplements & Utility
            </h1>
            <p className="text-xl md:text-xl">
              • Gymbro Supplement Line (Q2 2025):
            </p>
            <p className="text-xl md:text-xl">
              • Partner with supplement manufacturers to release a
              Gymbro-branded supplement line.
            </p>
            <p className="text-xl md:text-xl">
              • Introduce token utility where holders can earn rewards for
              fitness challenges.
            </p>
          </motion.div>
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-white h-10 w-1" />
            </div>
            <div>
              <div className="w-full h-1 bg-white" />
              <div className="bg-white mx-auto w-6 h-6 rounded-full -translate-y-4"></div>
            </div>
          </div>
          <img src={roadmapImage1} alt="" />

          {/* Phase 4: Expansion & Sustainability */}
          <div className="transform rotate-180">
            <div className="flex justify-center items-center">
              <div className="bg-white h-10 w-1" />
            </div>
            <div>
              <div className="w-full h-1 bg-white" />
              <div className="bg-white mx-auto w-6 h-6 rounded-full -translate-y-4"></div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="text-white flex flex-col gap-4 border border-white rounded-2xl px-4 py-4"
          >
            <h1 className="mt-6 bungee text-left text-[1.2rem] md:text-[1.5rem]">
              Phase 4: Expansion & Sustainability
            </h1>
            <p className="text-xl md:text-xl">
              • Global Gym Partnerships (Q3 2025):
            </p>
            <p className="text-xl md:text-xl">
              • Expand partnerships to international gym chains for discounts
              and promotions worldwide.
            </p>
            <p className="text-xl md:text-xl">
              • Sustainable Fitness Initiatives (Q3 2025):
            </p>
            <p className="text-xl md:text-xl">
              • Invest in sustainability projects like eco-friendly gym spaces.
            </p>
          </motion.div>

          {/* Phase 5: Long-Term Vision & Growth */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="text-white flex flex-col gap-4 mt-8 border border-white rounded-2xl px-4 py-4"
          >
            <h1 className="mt-6 bungee text-left text-[1.2rem] md:text-[1.5rem]">
              Phase 5: Long-Term Vision & Growth
            </h1>
            <p className="text-xl md:text-xl">
              • Ecosystem Expansion (Q4 2025 and beyond):
            </p>
            <p className="textxl md:text-xl">
              • Explore integration with metaverse platforms for virtual gym
              experiences.
            </p>
            <p className="text-xl md:text-xl">
              • Collaborate with fitness app developers to incorporate Gymbro
              token rewards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
