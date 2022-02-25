import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
import './App.css';


const App = () =>{

       if(!localStorage.getItem('username')) return <LoginForm />
       return(
              <ChatEngine
              height="100vh"
              projectID="476b1f49-4031-4b62-8f18-2001256fde61
              "
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/> }
              />
       );
}

export default App;