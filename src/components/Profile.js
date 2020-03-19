
function Profile() {
  return (
    <section id="user" className="uk-overlay-primary">
      {/* TODO: Find a way to NOT render this under 960px */}
      <div class="uk-overlay-primary uk-position-cover"></div>
      <p className="title">Andy Mendez</p>
    </section>
  );
}

export default Profile;
