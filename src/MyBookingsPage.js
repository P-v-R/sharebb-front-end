function MyBookingsPage({currUser}) {
  return (
    <div>
      <div className="row">
      <h1>My Bookings</h1>
      </div>

      {currUser.bookings.map(booking => (
        <div>{booking.startDate}</div>
      ))}

      
    </div>
  )
}

export default MyBookingsPage;