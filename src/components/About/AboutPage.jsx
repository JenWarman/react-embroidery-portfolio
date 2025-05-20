

function AboutPage() {
  return (
    <>
      <section className="about-page">
        <div className="about-page_banner">
          <img src="profile_round.png" alt="Photograph of Jen Warman." className="about-page_banner-img" />
          <div className="about-page_banner-text">
            <h1 className="about-page_banner-heading">About</h1>
            <p className="about-page_banner-intro">
              Hi, I&apos;m Jen Warman, an embroidery artist based in Nottingham.
              I specialise in creating unique hand embroidered pet portraits. My
              work is available on commission, so please contact me to find out
              more.
            </p>
          </div>
        </div>

        <div className="about-page_content-section">
          <div className="about-page_content-text-img-wrapper">
            <img
              src="FrenchKnots.jpg"
              alt="Close up of hand embroidered french knots. Light and dark green on a white paper background."
              className="about-page_content-img-right"
            />
            <p className="about-page_content-paragraph">
              I have a BA(Hons) in Textile Design from Arts University
              Bournemouth(AUB) and my graduate collection &apos;The Good
              Life&apos; featured screen printed and hand embroidered textile
              and wallpaper designs based on the various flora and fauna found
              at allotments. This collection won the School of Design Award and
              was a stand out feature of the AUB&apos;s graduate exhibition at
              New Designers held at the Business Design Center in London. After
              graduating I established myself as a surface pattern designer,
              screen printer and embroidery artist.
            </p>
          </div>
        </div>

        <div className="about-page_content-section">
          <div className="about-page_content-text-img-wrapper">
            <img
              src="IdealHomesShow.jpg"
              alt="Jen Warman and Laurence Llewelyn-Bowen at the Ideal Homes Show."
              className="about-page_content-img-left"
            />
            <p className="about-page_content-paragraph">
              My work has been featured in Period Living, The Guardian Weekly
              and Elle Decor and I was a top 5 finalist 2 years in a row for the
              Wallpaper Design of Year Award sponsored by the Ideal Homes Show.
              During this time I also returned to New Designers as part of their
              One Year On exhibition and showcased a collection of screen
              printed and digitally printed wallpaper designs. Additionally, I
              won Homebase&apos;s Wallpaper Design Award and my winning design
              was printed by Graham & Brown and distributed to all large
              Homebase stores throughout the UK.
            </p>
          </div>
        </div>

        <div className="about-page_content-section">
          <div className="about-page_content-wrapper">
            <img
            src="/Fabrics.jpg"
              alt="Stack of screen printed fabrics."
              className="about-page_content-img-right"
            />
            <p className="about-page_content-paragraph">
              Later I moved to Berlin, Germany and my work shifted focus to
              primarily surface pattern design and product development. I
              created a range of products including homewares and
              fashion accessories, featuring my pattern designs and also offered
              a range of ready made patterns available to license. During this
              time I joined the Berlin Kreativ Kollektiv (BKK), a group for
              artists and designers living in Berlin to share business advice,
              collaborate on projects, take part in events and I became the
              volunteer Website Administrator and Community Support Officer
              contributing to the successful relaunch of the BKK post covid.
            </p>
          </div>
        </div>

        <div className="about-page_content-section">
          <div className="about-page_content-text-img-wrapper">
            <img
              src="GingerCat.jpg"
              alt="Hand embroidered ginger cat portrait."
              className="about-page_content-img-left"
            />
            <p className="about-page_content-paragraph">
              Once I returned to the UK my creative focus and business
              objectives changed once again and I felt a real drive to get back
              to my artistic roots. Even though I enjoy surface pattern design,
              creating many successful collections of engaging patterns over the
              years, my real passion has always been hand embroidery and drawing
              with stitch. I now specialise in hand embroidered pet portraits,
              each one truly unique just like the pet themselves. My work is
              available on a commission basis so please get in touch to book
              your pet portrait.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
