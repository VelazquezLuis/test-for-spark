
function Profile() {
  return (
    <section id="user" className="uk-overlay-primary">
      {/* TODO: Find a way to NOT render this under 960px */}
      <div class="uk-overlay-primary uk-position-cover"></div>
      <p className="title uk-padding-remove-bottom">Andy Mendez</p>
      <p className="role uk-margin-small uk-margin-remove-top">Cold Fusion Developer</p>
      <img id="profilepic" className="uk-border-circle" src="https://api.iesd.com/wp-content/uploads/2019/10/robin-asm.jpg "/>
    </section>
  );
}

export default Profile;
