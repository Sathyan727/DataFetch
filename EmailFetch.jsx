import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmailFetch = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const emailList = response.data.map(user => user.email)
        setEmails(emailList)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <ul>
      {emails.map((email, index) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  )
}

export default EmailFetch
