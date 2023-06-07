import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Terms: React.FC = () => {
  return (
    <div className="lg:px-20 px-3 pt-20 lg:pt-0">
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-10 pt-10">
        <h1 className="text-3xl lg:text-5xl font-bold">Terms of use</h1>
        <p className="text-lg lg:text-xl font-bold text-center  w-full">
        <div>The TrxM.uk  website futures are available for use only by registered members.</div>
        <div>To register an account on TrxM.uk you must be at least 18 years old.</div>
        <div>By registering on the TrxM.uk  website you agree and fully accept the following Terms of Use.</div>
        </p>
        
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Investments</h1>
        </div>
        <p className="mb-2 text-left leading-8">
        <p>The deposit (Investment) is a private agreement between TrxM.uk  and our Member.</p>

        <p>Users process all financial transactions solely at their discretion and at their own risk. The size and term of the deposit are determined personally by each user.</p>

        <p>Daily-earnings from the investment plan will be added to the user's account every 24 hour.</p>

        <p>To make a deposit, Member can only use Tron TRX deposit to payment systems accepted by TrxM.uk. </p>

        <p>Each Member can have only one registered account. Registration by one person, more than one account in the referral structure may result in blocking funds on all linked accounts.</p>

        </p>
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Withdrawals</h1>
        </div>
        <p className="mb-2 text-left leading-8">
        <p>Withdrawals are processed on all days of the year, including weekends and bank holidays.</p>

        <p>Withdrawal of Earnings and Referral Commission are processed within 24 hours.</p>

        <p>Withdrawal requests after deposit release may take up to 48 hours.</p>

        <p>TrxM.uk  is not responsible for the speed of the blockchain network for individual cryptocurrencies.</p>

        <p>TrxM.uk  cannot reverse or cancel cryptocurrency transfers made to a wrong provided wallet address.</p>

        </p>
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Security</h1>
        </div>
        <p className="mb-2 text-left leading-8">
        <p>Each Member is responsible for the security of his TrxM.uk  account.</p>

        <p>Member should use a strong password consisting of at least 6 characters, containing upper and lower case letters, numbers, or special characters.</p>

        </p>
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold"> Anti-Spam</h1>
        </div>
        <p className="mb-2 text-left leading-8">
        <p>Spam is commercial e-mail or unsolicited bulk e-mail, including "spam/junk mail", which has not been requested by the recipient.</p>

        <p>It is intrusive and often irrelevant or offensive, and it wastes valuable resources.</p>

        <p>If any law enforcement agency, internet provider, web hosting provider, or other person or entity provide us with notice that you may have engaged in the transmission of unsolicited e-mails or may have engaged in otherwise unlawful conduct or conduct in violation of an internet service provider's terms or any such policies regulations, we will reserve the right to cooperate in any investigation relating to your activities including disclosure of your account information.</p>


        </p>
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">
            The procedure of amending the present rules
          </h1>
        </div>
        <p className="mb-2 text-left leading-8">
        <p>TrxM.uk reserves the right to make changes to the current document.</p>

        <p>TrxM.uk  will inform investors about changes by publishing them in News</p>

        <p>Terms of Use changes come into force since the date of publishing information.</p>

        </p>
      </div>
      <div className="mb-20 flex flex-col justify-start gap-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-ibiza rounded-md p-3 text-xl text-white">
            <FiChevronRight />
          </div>
          <h1 className="text-2xl font-bold">Contact Information</h1>
        </div>
        <p className="mb-2 text-left leading-8">
        If you have questions or complaints about this Agreement, please contact us at the following address: support@TrxM.uk
        </p>
      </div>
    </div>
  );
};

export default Terms;
