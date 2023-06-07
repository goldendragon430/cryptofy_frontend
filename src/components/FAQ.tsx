import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const AccountData = [
      {'title' : 'How to sign up?', 'content' : 'Open the sign up form and fill in the blank fields, enter your email and create a password.'},
      {'title' : 'What if I forgot my password?', 'content' : 'Open the password recovery form, enter your current email address and you will receive an email with a link to reset your password.'},
      {'title' : 'Can I make multiple accounts?', 'content' : 'No, accounts made by one user will be automatically detected and blocked without explanation.'},
      {'title' : 'In which cases can my account be blocked?', 'content' : 'TrxM.uk takes a responsible approach to protect the personal data of its users, as well as the security of its site. Any attempts to collect users personal information, hacking of the site code, unfair use of the affiliate program, gaining access to user accounts through hacking, using third-party services to artificially increase the number of partners, as well as any insults to the administration of the site or its users may become a reason for suspension of the user account.'},  
  ]
  const FundsData = [
    {'title' : 'How much can I earn with TrxM?', 'content' : 'Every day you can earn from 2% to 5% of your deposit amount + referral bonuses.'},
    {'title' : 'How to activate mining to make it profitable?', 'content' : 'You need to log in to your account, then go to the "Dashboard" page and activate the mining by moving the power pointer as you wish. Then click the activate button to make the changes take effect. '},
    {'title' : 'How to make a deposit and purchase power?', 'content' : 'To purchase the power, you must open the Deposit tab in your account and add funds/power by selected coin.'},
    {'title' : 'For what time is the power acquired?', 'content' : 'Each new deposit or reinvestment will be available 180 days from the moment of crediting'},
    {'title' : 'How to withdraw funds?', 'content' : 'Withdrawal of funds is available in the "Dashboard" section. Click on the "Withdrawal" button, then specify the amount and wallet to receive funds.'},
    {'title' : 'What is the minimum withdrawal amount?', 'content' : 'The minimum amount to withdraw funds from your account is 100TRX'},
    {'title' : 'How fast is the withdrawal made?', 'content' : 'The funds will be withdrawn immediately after your request, but only once a day.'},
    {'title' : 'Is there any commission for depositing funds or withdrawing profit in the account?', 'content' : 'No, we do not charge a commission for depositing funds and withdrawing profits, our project operates on a commission-free system.'},
    {'title' : "Why haven't I received my payment/deposit?", 'content' : 'Check if the end address of the wallet has been entered correctly. If everything is correct, then you should contact our online technical support or telegram support.'},
    {'title' : "How does reinvest work?", 'content' : 'You can always exchange the accumulated coins for GH/s power in the Deposit section. To do this, click the "Reinvest" button and follow the instructions below.'},
    
  ]
  const BonusData = [
    {'title' : 'How much will I get for replenishment made by my referrals?', 'content' : 'For the purchase of power by your referrals, you will receive 8% for first-level referral  ,5% for second-level referral and 3% for third-level partners.'},
    {'title' : 'How do I get a registration bonus?', 'content' : 'To receive the bonus, you need to go through the registration procedure and you will get a bonus automatically.'},
    {'title' : 'How soon will I be able to withdraw funds without investing?', 'content' : 'If you do not replenish your account, you will need ~60 days to accumulate a minimum amount for withdrawal of funds.'},
    {'title' : 'What is a random bonus?', 'content' : 'You can get this bonus daily in the bonuses section. The bonus can be up to 5 GH/s!'},
    
  ]
  return (
    <div className="px-3 pt-20 lg:px-20 lg:pt-0" style = {{padding:30}}>
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-10  text-cblack ">
        <h1 className="text-5xl font-bold">FAQ</h1>
      </div>
      <h1 style= {{fontSize:30,fontWeight:700,marginBottom:20}} >Account</h1>
      {
        AccountData.map((item,i)=>(
          <Accordion key = {i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1><b>{item.title}</b></h1>
          </AccordionSummary>
          <AccordionDetails>
            <p>
             {item.content}
            </p>
          </AccordionDetails>
        </Accordion>
        ))
      }
      <h1 style= {{fontSize:30,fontWeight:700,marginTop:20,marginBottom:20}} >Deposit and withdrawal of funds</h1>
      {
        FundsData.map((item,i)=>(
          <Accordion key = {i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1><b>{item.title}</b></h1>
          </AccordionSummary>
          <AccordionDetails>
            <p>
             {item.content}
            </p>
          </AccordionDetails>
        </Accordion>
        ))
      }
      <h1 style= {{fontSize:30,fontWeight:700,marginTop:20,marginBottom:20}} >Affiliate program and bonuses</h1>
      {
        BonusData.map((item,i)=>(
          <Accordion key = {i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1><b>{item.title}</b></h1>
          </AccordionSummary>
          <AccordionDetails>
            <p>
             {item.content}
            </p>
          </AccordionDetails>
        </Accordion>
        ))
      }

    </div>
  );
};

export default Faq;
