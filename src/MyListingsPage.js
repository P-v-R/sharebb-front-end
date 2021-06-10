function MyListingsPage({currUser}) {
  return (
    <div>
      <div className="row">
      <h1>My Listings</h1>
      <button href="/share">+ Add a new listing</button>
      </div>

      {currUser.listings.map(listing => (
        <div>{listing.title}</div>
      ))}

      
    </div>
  )
}

export default MyListingsPage;