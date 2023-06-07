import { Slider } from "@mui/material";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { useState, type FC ,useEffect} from "react";

const Card: FC<CurrencyCard> = ({ coinType, amount, power, imgSrc, color,total,update }) => {
  const [defaultValue, setDefaultValue] = useState(power);
  const [balance, setBalance] = useState(amount);
  
  useEffect(()=>{
    setDefaultValue(power)
    setBalance(amount)
  },[power,amount])

  const onChangePower = (e) =>{
    setDefaultValue(e.target.value)
    update(e.target.value)
  }
  return (
    <div
      className={`w-full rounded-lg p-2 px-4 py-4`}
      style={{ background: color,height:170 ,maxWidth:500}}
    >
      <div className="grid w-full grid-cols-powerCard ">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <span className="text-base text-white ">{coinType}</span>
          <span className="text-2xl font-bold text-white ">
            {balance.toFixed(12)}
          </span>
          <span className="text-xs uppercase text-white ">
            power {defaultValue} gh/s
          </span>
        </div>
        <img src={imgSrc} className="h-16 w-16 self-center" alt="" />
      </div>
      <div className="mt-4 flex h-fit w-full items-center justify-center gap-2 ">
        <AiOutlinePlaySquare
          className="relative z-50 rotate-180 text-white"
          onClick={() =>
            setDefaultValue((prev) => {
              if (prev == 0) {
                return prev;
              }
              return prev - 1;
            })
          }
        />
        <Slider
          size="small"
          value={defaultValue}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "white", zIndex: 50 }}
          onChange = {onChangePower}
          max = {total}
        />
        <AiOutlinePlaySquare
          className="relative z-50 text-white"
          onClick={() =>
            setDefaultValue((prev) => {
              if (prev >= total) {
                return total;
              }
              return prev + 1;
            })
          }
        />
        {/* <div className="absolute bottom-0 h-12 w-full bg-[#ffffff27]"></div> */}
      </div>
    </div>
  );
};

export default Card;
