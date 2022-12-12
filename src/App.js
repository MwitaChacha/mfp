import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import Women from "../src/assets/images/women_rice.png";
import Floods from "../src/assets/images/floods.jpg";
import Disease from "../src/assets/images/disease.jpg";
import Drought from "../src/assets/images/drought.jpg";
import Transport from "../src/assets/images/transport.jpg";
import Anticipatory from "../src/assets/images/anticipatory.png";
import Bee from "../src/assets/images/bee_keeping.png";
import Market from "../src/assets/images/market.jpg";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 8000);
  });
  if (loading) {
    return (
      <motion.main
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="min-h-sreen"
      >
        <div className="relative flex flex-col h-full items-center justify-center min-h-screen w-full opening">
          <div className="absolute top-0 pt-20 w-screen h-screen m-auto">
            <img
              src={Transport}
              alt="Women in Rice fields"
              className="m-auto  object-center object-cover opacity-40 rounded-2xl"
            />
          </div>
          <h1 className="text-6xl opening-text">mashujaa food programme</h1>
          <p>Supply Chain in Emergency Preparedness and Response</p>
        </div>
      </motion.main>
    );
  } else {
    return (
      <main>
        <motion.nav
          whileInView={{
            y: 10,
          }}
          initial={{
            y: -40,
          }}
          transition={{
            duration: 2,
          }}
          className="relative flex flex-wrap items-center justify-between px-2 py-3 text-white mb-3"
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-yellow-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                MASHUJAA FOOD PROGRAMME{" "}
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="text-yellow-500 px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-xl leading-lg text-white opacity-75"></i>
                    <span className="ml-2">who we are</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="text-yellow-500 px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">supply chain strategy</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Pin</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </motion.nav>
        <section className="grid grid-cols-2 gap-x-8 h-screen p-6">
          <motion.div
            whileInView={{
              x: 100,
            }}
            initial={{
              x: -100,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col space-y-2 leading-none justify-center items-start"
          >
            <h1 className="opening-text">Emergency,</h1>
            <h1 className="opening-text">Preparedness</h1>
            <h1 className="opening-text">& Response</h1>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="flex justify-center items-center p-6"
          >
            <p className="text-2xl leading-loose">
              The Mashujaa Food Program (MFP) was founded in 2022 in response to
              the various crises in East Africa. Those comprise a heavy drought,
              floodings, and health emergencies.
            </p>
          </motion.div>
        </section>

        <motion.section
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="grid grid-cols-3 gap-x-8 h-screen p-20 bg-white"
        >
          <motion.div className="relative flex flex-col justify-end h-full bg-gray-100 rounded-3xl overflow-hidden transition duration-500 ease-in-out hover:scale-105">
            <div className="absolute top-0 left-0 h-full w-full">
              <motion.img
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                src={Disease}
                alt="Women in Rice fields"
                className="h-full w-full object-center object-cover theme"
              />
            </div>

            <div className="z-10 p-6 backdrop-filter backdrop-blur-md bg-black/10 text-black">
              <h1 className="text-2xl font-semibold text-white opening-text animate-pulse">
                disease
              </h1>
              {/* <p className="text-black">Your explanation here</p> */}
            </div>
          </motion.div>

          <div className="relative flex flex-col justify-end h-full bg-gray-100 rounded-3xl overflow-hidden transition duration-500 ease-in-out hover:scale-105">
            <div className="absolute top-0 left-0 h-full w-full">
              <motion.img
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                src={Floods}
                alt="Women in Rice fields"
                className="h-full w-full object-center object-cover theme"
              />
            </div>

            <div className="z-10 p-6 backdrop-filter backdrop-blur-md bg-black/10 text-black">
              <h1 className="text-2xl font-semibold text-white opening-text animate-pulse">
                floods
              </h1>
              {/* <p className="text-black">Your explanation here</p> */}
            </div>
          </div>

          <div className="relative flex flex-col justify-end h-full bg-gray-100 rounded-3xl overflow-hidden transition duration-500 ease-in-out hover:scale-105">
            <div className="absolute top-0 left-0 h-full w-full">
              <motion.img
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                src={Drought}
                alt="Women in Rice fields"
                className="h-full w-full object-center object-cover theme"
              />
            </div>

            <div className="z-10 p-6 backdrop-filter backdrop-blur-md bg-black/10 text-black">
              <h1 className="text-2xl font-semibold text-white opening-text animate-pulse">
                drought
              </h1>
              {/* <p className="text-black">Your explanation here</p> */}
            </div>
          </div>
        </motion.section>
        <div className=" ">
          <section className="grid grid-cols-2 gap-x-8 h-screen p-6  bg-yellow-700">
            <motion.div
              whileInView={{
                x: 100,
              }}
              initial={{
                x: -100,
              }}
              transition={{
                duration: 1,
              }}
              className="flex flex-col space-y-2 leading-none justify-center items-start"
            >
              <h1 className="opening-text">MFP SUPPLY</h1>
              <h1 className="opening-text">CHAIN</h1>
              <h1 className="opening-text">STRATEGY</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="flex justify-center items-center p-6"
            >
              <p className="text-4xl leading-loose">
                • Anticipatory actions <br />• Building Local supply chains{" "}
                <br />
                • Building resilience by ensuring sustainability of the
                communities
                <br /> • Strengthening National Capacities
              </p>
            </motion.div>
          </section>
        </div>
        <div className="bg-white text-gray-600">
          <section>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center opening-text pt-10"
            >
              1. anticipatory actions
            </motion.h1>
            <div className="grid grid-cols-2 gap-x-8 h-screen">
              <motion.div
                whileInView={{
                  x: 100,
                }}
                initial={{
                  x: -100,
                }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col space-y-2 leading-none justify-center items-start"
              >
                <img className="theme-img" src={Anticipatory} alt="" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="flex justify-center items-center p-6"
              >
                <p className="text-4xl leading-tight text-slate-500">
                  Through Early Warning Systems and Anticipatory Action (AA),
                  MFP can prevent or mitigate potential disaster impacts before
                  a shock, or before acute impacts are felt, helping affected
                  populations to avoid negative coping strategies.
                </p>
              </motion.div>
            </div>
            <div>
              <h1 className="text text-center">
                Data and Evidence Driven Decision Making
              </h1>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="text-center text-lg text-slate-700 pb-20"
              >
                {" "}
                <p className="text-slate-700 text-lg leading-loose">
                  What to consider? <br />
                  1. Where can we get data from/quality of data, is it reliable?{" "}
                  <br />
                  2. How can supply chain use/process this data?
                  <br />
                  3. How will Supply chain communicate this intelligence?
                </p>
              </motion.div>
            </div>
          </section>
        </div>
        <div className="bg-slate-400 text-gray-600">
          <section>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center opening-text pt-10"
            >
              2. Building Local supply chains
            </motion.h1>
            <div className="grid grid-cols-2 gap-x-8 h-screen">
              <motion.div
                whileInView={{
                  x: 100,
                }}
                initial={{
                  x: -100,
                }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col space-y-2 leading-none justify-center items-start"
              >
                <img className="theme-img w-3/4" src={Women} alt="" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="flex justify-center items-center p-6"
              >
                <p className="text-4xl leading-tight text-slate-700">
                  It is critical to support efforts to rebuild, prepare for
                  post-event challenges like disease, understand the decision
                  process for people in this situation, and provide funding
                  (either through the state or private providers like
                  micro-insurers).
                </p>
              </motion.div>
            </div>
            <div>
              <h1 className="text text-center">
                MFP can encourage community asset use by building local supply
                chains. This will be effective in the following ways:
              </h1>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="text-center text-lg text-slate-700 pb-20"
              >
                {" "}
                <p className="text-slate-700 text-lg leading-loose">
                  <br />
                  1. Contracting local communities to fulfil supply chain
                  functions.
                  <br />
                  2. First level primary processing
                  <br />
                  3. Procuring from local firms and local businesses
                  <br />
                  4. Building local capacity by supporting technical training
                  <br />
                  5. Integrating local knowledge of the experience of floods,
                  drought and health epidemics and memories along with that of
                  expert knowledge
                </p>
              </motion.div>
            </div>
          </section>
        </div>
        <div className="bg-pink-100 text-gray-600">
          <section>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center opening-text pt-10"
            >
              3. Building resilience by ensuring sustainability of the
              communities
            </motion.h1>
            <div className="grid grid-cols-2 gap-x-8 h-screen">
              <motion.div
                whileInView={{
                  x: 100,
                }}
                initial={{
                  x: -100,
                }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col space-y-2 leading-none justify-center items-start"
              >
                <img className="theme-img" src={Bee} alt="" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="flex justify-center items-center p-6"
              >
                <p className="text-4xl leading-tight text-slate-700">
                  -Physical Resilience <br /> -Economic Resilience <br />{" "}
                  -Fishing
                  <br /> -Bee Keeping <br /> -Agri-pastoral value chaine <br />
                  -Invest in hydroponics <br />
                  -Invest in aeroponics
                  <br />
                </p>
              </motion.div>
            </div>
            <div>
              <h1 className="text text-center">Sustainability</h1>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="text-center text-lg text-slate-700 pb-20"
              >
                {" "}
                <p className="text-slate-700 text-lg leading-loose">
                  Employing the use of a screening tool to assess the impact of
                  MFP activities on the environment and the socio-economic
                  activities of our beneficiaries.
                </p>
              </motion.div>
              <div className="mx-auto text-lg px-10">
                <motion.table
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 3 }}
                  class="table-fixed"
                >
                  <thead>
                    <tr>
                      <th>SUSTAINABILITY SCREENING TOOL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. SUSTAINABLE NATURAL RESOURCE MANAGEMENT</td>
                      <td>Land cover, Water, Soils</td>
                    </tr>
                    <tr>
                      <td>2. ECOSYSTEMS AND BIODIVERSITY</td>
                      <td>Natural habitats, Protected areas</td>
                    </tr>
                    <tr>
                      <td>
                        3. RESOURCE EFFICIENCY AND WASTE AND POLLUTION
                        MANAGEMENT
                      </td>
                      <td>
                        Fuel consumption, Pollution substances, Waste
                        generation, Agrochemicals
                      </td>
                    </tr>
                    <tr>
                      <td>4. CLIMATE CHANGE</td>
                      <td>GHG emissions, Exposure to natural hazards</td>
                    </tr>
                    <tr>
                      <td>5. PROTECTION AND HUMAN RIGHTS</td>
                      <td>
                        Violation of human rights/ promote discrimination, Child
                        labour, Affects cultural heritage
                      </td>
                    </tr>
                    <tr>
                      <td>6. GENDER EQUALITY</td>
                      <td>Activities that create gender-based inequalities</td>
                    </tr>
                    <tr>
                      <td>7. COMMUNITY HEALTH, SAFETY &amp; SECURITY</td>
                      <td>
                        Increased tensions/conflicts, Labour rights as defined
                        by national government, Activities that spread diseases
                        or lead to new diseases
                      </td>
                    </tr>
                    <tr>
                      <td>8. ACCOUNTABILITY TO AFFECTED POPULATIONS</td>
                      <td>
                        Some stakeholders are not given a fair chance to air
                        their concerns, MFP should be in constant consultation
                        with the local community to identify gaps.
                      </td>
                    </tr>
                  </tbody>
                </motion.table>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-white text-gray-600">
          <section>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center opening-text pt-10"
            >
              4. Strengthening National Capacities
            </motion.h1>
            <div className="grid grid-cols-2 gap-x-8 h-screen">
              <motion.div
                whileInView={{
                  x: 100,
                }}
                initial={{
                  x: -100,
                }}
                transition={{
                  duration: 1,
                }}
                className="flex flex-col space-y-2 leading-none justify-center items-start"
              >
                <img className="theme-img w-3/4" src={Market} alt="" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="flex justify-center items-center p-6"
              >
                <p className="text-4xl leading-tight text-slate-500">
                  Institutional resilience concerns the endeavours of
                  organizations to battle calamities through arranging,
                  mindfulness raising projects and alleviation measures.
                  Emphasis on building national supply chains and emergency
                  response capacity.
                </p>
              </motion.div>
            </div>
            <div>
              <h1 className="text text-center">advantages and outcomes</h1>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className="text-center text-lg text-slate-700 pb-20"
              >
                {" "}
                <p className="text-slate-700 text-lg leading-loose">
                  1. It can align MFPs response with national priorities putting
                  an emphasis on responding to emergencies <br />
                  2. With the government as a partner there is more advocacy
                  potential and opportunities.
                  <br />
                  3. Agreeing on triggers for beneficiaries to receive resources
                  from safety nets
                  <br />
                  4. Building MIS/ registries
                  <br />
                  5. Reduction in MFP supply chain costs
                  <br />
                  6. Awareness – Better informed government and Community
                  members <br />
                  7. Stable governments
                  <br />
                  8. More resilient community
                  <br />
                  9.Increased value chain
                  </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default App;
