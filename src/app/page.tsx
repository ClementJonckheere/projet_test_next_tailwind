import './globals.css'

export default function Home() {
  return (
      <main>
          <section className="w-full md:pt-44 mt-[-25px] relative flex items-center justify-center flex-col ">
              <div
                  className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#183249_2px,transparent_1px),linear-gradient(to_bottom,#183249_2px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-15"/>
              <p className="text-center" style={{ color: '#183148' }}>Test tailwind</p>
              <div
                  className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                  <h1 className="text-9xl font-bold text-center xl:text-[150px] md:text-[100px] sm:text-[50px]" style={{ color: '#183148' }}>
                      Deep Blue
                  </h1>
              </div>
          </section>
          <section className="flex justify-center w-full m-6 md:pt-44 mt-[-25px]">
              <div className="flex justify-around w-full">
                  <div className="relative p-1">
                      <div className="absolute inset-0 rounded"></div>
                      <a href="#"
                         className="route_page_accueil relative flex justify-center items-center bg-dark border-4 border-transparent rounded m-1 py-10 px-12">
                          <span className="text-xl text-amber-50">Voir la page 1</span>
                      </a>
                  </div>
                  <div className="relative p-1">
                      <div className="absolute inset-0 rounded"></div>
                      <a href="#"
                         className="route_page_accueil relative flex justify-center items-center bg-dark border-4 border-transparent rounded m-1 py-10 px-12">
                          <span className="text-xl text-amber-50">Voir la page 1</span>
                      </a>
                  </div>
                  <div className="relative p-1">
                      <div className="absolute inset-0 rounded "></div>
                      <a href="#"
                         className="route_page_accueil relative flex justify-center items-center bg-dark border-4 border-transparent rounded m-1 py-10 px-12">
                          <span className="text-xl text-amber-50">Voir la page 1</span>
                      </a>
                  </div>
              </div>
          </section>
      </main>
  );
}
