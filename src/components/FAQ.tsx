import { FiChevronRight } from "react-icons/fi";

const Faq = () => {
  return (
    <div className="px-3 pt-20 lg:px-20 lg:pt-0">
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-10  text-cblack ">
        <h1 className="text-5xl font-bold">FAQ</h1>
        <p>Answers to all your questions.</p>
      </div>
      <div className="flex flex-col justify-start gap-3 text-cblack">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Account</h1>
        </div>
        <h1 className="text-2xl font-bold">How to register?</h1>
        <p className="mb-2 text-lg">
          Open the registration form and fill in the blank fields, enter your
          email and create a password.
        </p>
        <h1 className="text-2xl font-bold">What if I forgot my password?</h1>
        <p className="mb-2 text-lg">
          Open the password recovery form, enter your current email address and
          you will receive an email with a link to reset your password.
        </p>
        <h1 className="text-2xl font-bold">What crypto do you accept?</h1>
        <p className="mb-2 text-lg">
          We accept Binance Coin, Tron, Dogecoin, and Bitcoin.
        </p>
        <h1 className="text-2xl font-bold">How to choose a coin?</h1>
        <p className="mb-2 text-lg">
          You don't have to choose anything. You can start mining all coins at
          the same time immediately after registration.
        </p>
        <h1 className="text-2xl font-bold">Can I make multiple accounts?</h1>
        <p className="mb-2 text-lg">
          No, accounts made by one user will be automatically detected and
          blocked without explanation.
        </p>
        <h1 className="text-2xl font-bold">
          In which cases can my account be blocked?
        </h1>
        <p className="mb-2 text-lg">
          Cryptofy takes a responsible approach to protect the personal data of
          its users, as well as the security of its site. Any attempts to
          collect users personal information, hacking of the site code, unfair
          use of the affiliate program, gaining access to user accounts through
          hacking, using third-party services to artificially increase the
          number of partners, as well as any insults to the administration of
          the site or its users may become a reason for suspension of the user
          account.
        </p>
        <h1 className="text-2xl font-bold"></h1>
        <p className="mb-2 text-lg"></p>
      </div>
      <div className="flex flex-col justify-start gap-3 text-cblack">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">
            Deposit and withdrawal of funds
          </h1>
        </div>
        <h1 className="text-2xl font-bold">
          How much can I earn with Cryptofy?
        </h1>
        <p className="mb-2 text-lg">
          Every day you can earn from 2% to 5% of your deposit amount + referral
          bonuses.
        </p>
        <h1 className="text-2xl font-bold">
          How to activate mining to make it profitable?
        </h1>
        <p className="mb-2 text-lg">
          You need to log in to your account, then go to the "Dashboard" page
          and activate the mining by moving the power pointer as you wish. Then
          click the activate button to make the changes take effect. You have
          100% power that you can use either to mine a specific cryptocurrency
          or to distribute it among several cryptocurrencies.
        </p>
        <h1 className="text-2xl font-bold">
          How to make a deposit and purchase power?
        </h1>
        <p className="mb-2 text-lg">
          To purchase the power, you must open the Deposit tab in your account
          and add funds/power by selected coin.
        </p>
        <h1 className="text-2xl font-bold">
          What is the minimum deposit amount?
        </h1>
        <p className="mb-2 text-lg">
          The minimum amount to increase the power is 40 GH/s or 1 USD
        </p>
        <h1 className="text-2xl font-bold">
          For what time is the power acquired?
        </h1>
        <p className="mb-2 text-lg">
          Each new deposit or reinvestment will be available 180 days from the
          moment of crediting
        </p>
        <h1 className="text-2xl font-bold">How to withdraw funds?</h1>
        <p className="mb-2 text-lg">How to withdraw funds?</p>
        <h1 className="text-2xl font-bold">
          What is the minimum withdrawal amount?
        </h1>
        <p className="mb-2 text-lg">
          The minimum amount to withdraw funds from your account is 0.014 BNB,
          72 TRX, 59 DOGE, 0.00016 BTC.
        </p>
        <h1 className="text-2xl font-bold">How fast is the withdrawal made?</h1>
        <p className="mb-2 text-lg">
          The funds will be withdrawn immediately after your request, but only
          once a day.
        </p>
        <h1 className="text-2xl font-bold">
          Is there any commission for depositing funds or withdrawing profit in
          the account?
        </h1>
        <p className="mb-2 text-lg">
          No, we do not charge a commission for depositing funds and withdrawing
          profits, our project operates on a commission-free system.
        </p>
        <h1 className="text-2xl font-bold">
          Why haven't I received my payment/deposit?
        </h1>
        <p className="mb-2 text-lg">
          Check if the end address of the wallet has been entered correctly. If
          everything is correct, then you should contact our online technical
          support or telegram support.
        </p>
        <h1 className="text-2xl font-bold">How does reinvest work?</h1>
        <p className="mb-2 text-lg">
          You can always exchange the accumulated coins for GH/s power in the
          Deposit section. To do this, click the "Reinvest" button and follow
          the instructions below.
        </p>
      </div>
      <div className="mb-10 mt-5 flex flex-col justify-start gap-3 text-cblack">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Affiliate program and bonuses</h1>
        </div>
        <h1 className="text-2xl font-bold">
          How much power will I get from the invited people?
        </h1>
        <p className="mb-2 text-lg">
          You will get 1 GH/s for each invited user.
        </p>
        <h1 className="text-2xl font-bold">
          How much will I get for replenishment made by my referrals?
        </h1>
        <p className="mb-2 text-lg">
          For the purchase of power by your referrals, you will receive 10% + 3
          GH/s for first-level referral +1 GH/s for each new first-level
          referral, 5% + 2 GH/s for second-level referral and 1% + 1 GH/s for
          third-level partners.
        </p>
        <h1 className="text-2xl font-bold">
          How do I get a registration bonus?
        </h1>
        <p className="mb-2 text-lg">
          To receive the bonus, you need to go through the registration
          procedure and you will get a bonus automatically.
        </p>
        <h1 className="text-2xl font-bold">
          How soon will I be able to withdraw funds without investing?
        </h1>
        <p className="mb-2 text-lg">
          If you do not replenish your account, you will need ~60 days to
          accumulate a minimum amount for withdrawal of funds.
        </p>
        <h1 className="text-2xl font-bold">What is a random bonus?</h1>
        <p className="mb-2 text-lg">
          You can get this bonus once an six hours in the bonuses section. The
          bonus can be up to 5 GH/s!
        </p>
      </div>
    </div>
  );
};

export default Faq;
