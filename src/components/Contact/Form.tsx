import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../pages/services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';


export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        if(!name || !email || !message) {
            toast("Please make sure to fill all required fields.", {
                style: {
                    background: theme.background,
                    color: '#fff'
                }
            });
            return;
        }

        try {
            setLoading(true);
            await sendContactMail(name, email, message);
            setName('');
            setEmail('');
            setMessage('');

            toast("Your message was sent successfully!", {
                style: {
                    background: theme.background,
                    color: '#fff'
                }
            })
        } catch (error) {
            toast("Something went wrong please try again.", {
                style: {
                    background: theme.error,
                    color: '#fff'
                }
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input placeholder="[ Your name ]"
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            <Input placeholder="[ Your email ]" type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <TextArea placeholder="[ Your message ]" 
                value={message}
                onChange={({ target }) => setMessage(target.value)}
            />
            <button type="submit" disabled={loading}>
                Send message!
            </button>
        </FormContainer>
    )
}