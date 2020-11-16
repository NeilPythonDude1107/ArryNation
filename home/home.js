import React from 'react'
import './home.css'
//no home 

export default function Home() {
    return (
        <div className="app">
          <div className="heroes-box">
            <center>
              <h1 className="Phrase">Welcome to TheBoomMakers...Your Virtual Workspace!!</h1>              
              <img className="img" src="https://roaringcampgold.com/wp-content/uploads/2016/08/iStock_92129797_SMALL.jpg" alt='' />
            </center>
          </div>          
          <div className="hook">
            <center>
              <p>Some good content</p> 
            </center>   
          </div>
          <div className="login">
            <button className="signup-button">Sign Up <i className='material-icons'>arrow_forward</i></button>
            {/* Get ann arrow next to this: add an identical button @ the bottom of the page */}           
          </div>
          <div className="org">
            <h2 className="header">Organizations!</h2>
            <img className="org-img" src="https://zdnet2.cbsistatic.com/hub/i/2020/04/07/5b84e3f2-04b8-4315-bad7-ffad4ff4a601/ms-teams-change-organization.jpg" alt="" /> 
            <h3 className="org-description">With org-wide teams, global admins can easily create a public team that pulls in every user in the organization and keeps the membership up to date with Active Directory as users join and leave the organization. Only global admins can create org-wide teams and currently, an org-wide team is limited to organizations with no more than 5,000 users. There's also a limit of five org-wide teams per tenant. If these requirements are met, global admins will see Org-wide as an option when they select Build a team from scratch when creating a team.</h3> 
          </div> 
          <br />    
          <br />
          <div className="chat">
            <h2 className="header">Chats!</h2>
            <img className="chat-img" src="https://www.getmailbird.com/wp-content/uploads/2018/05/unnamed-3.jpg" alt="" />  
            <h3 className="chat-description">Sometimes you’ll want to talk one-on-one with someone. Other times, you’ll want to have a small group chat. In Chat, you can do either.

You start one-on-one and group chats the same way: by selecting New chat Chat icon in Teams. at the top of your chat list. Once in a chat, you’ll be able to send messages that include files, links, emojis, stickers, and GIFs—whatever you need to get your point across! <br /> Sometimes you’ll want to talk one-on-one with someone. Other times, you’ll want to have a small group chat. In Chat, you can do either.

You start one-on-one and group chats the same way: by selecting New chat Chat icon in Teams. at the top of your chat list. Once in a chat, you’ll be able to send messages that include files, links, emojis, stickers, and GIFs—whatever you need to get your point across! <br /><br /> You start one-on-one and group chats the same way: by selecting New chat Chat icon in Teams. at the top of your chat list. </h3>
          </div> 
          <br />
          <div className="teams">
            <h2 className="header">Teams!</h2>
            <img className="teams-img" src="https://support.content.office.net/en-us/media/89988051-4646-47ea-8e6e-dcb131c5a3b8.png" alt="" />
            <h3 className="teams-description">A team is designed to bring together a group of people who work closely to get things done. Teams can be dynamic for project-based work (for example, launching a product, creating a digital war room), as well as ongoing, to reflect the internal structure of your organization (for example, departments and office locations). Conversations, files and notes across team channels are only visible to members of the team. <br /> Channels are dedicated sections within a team to keep conversations organized by specific topics, projects, disciplines—-whatever works for your team! Files that you share in a channel (on the Files tab) are stored in SharePoint. To learn more, read How SharePoint Online and OneDrive for Business interact with Teams.</h3>            
          </div>    
        </div>
    )
}   
