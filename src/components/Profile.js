function Profile() {
  return (
    <section>
      <section id='user' className='uk-overlay-primary'>
        {/* TODO: Find a way to NOT render this under 960px */}
        <div class='uk-overlay-primary uk-position-cover'></div>
        <p className='title uk-padding-remove-bottom'>Andy Mendez</p>
        <p className='role uk-margin-small uk-margin-remove-top'>
          Cold Fusion Developer
        </p>
        <img
          id='profilepic'
          className='uk-border-circle'
          src='https://api.iesd.com/wp-content/uploads/2019/10/robin-asm.jpg '
        />
      </section>
      <section class='uk-grid uk-padding-large'>
        <section class='uk-width-2-3'>
          <section className='uk-width-3-3'>
            <h2 id='responsive-width'>
              <a href='#responsive-width' class='uk-link-reset'>
                Responsive width
              </a>
            </h2>
            <p>
              UIkit provides a number of very useful responsive widths classes.
              Basically they work just like the usual width classes, except they
              are prefixed, so that they only come to effect at certain
              breakpoints. These classes can be combined with the visibility
              classes from the <a href='utility.html'>Utility component</a>.
              This is great to adjust your layout and content for different
              device sizes.
            </p>{" "}
          </section>
          <section className='uk-width-3-3'>
            <div class='timeline uk-width-3-3'>
              <div class='container  right'><div class="container2 right2"></div>
                <div class='contents'>
                  <h2>2016</h2>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
              <div class='container right'>
                <div class='contents'>
                  <h2>2012</h2>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
              <div class='container right'>
                <div class='contents'>
                  <h2>2007</h2>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class='uk-width-1-3'>
          <div id='info-card' class='uk-card uk-card-body uk-width-3-3'>
            <h2 class='uk-card-title uk-text-bolder meduim-text uk-margin-small'>
              Contact
            </h2>
            <h4 className='meduimP-text uk-margin-medium-top uk-text-muted  '>
              Phone Number
            </h4>
            <p className=' uk-text-bolder book-text uk-margin-remove'>
              +19511234567
            </p>
            <p>
              Lorem ipsum <a href='#'>dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Profile;
