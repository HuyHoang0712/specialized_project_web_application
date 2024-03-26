import React, { useState, useEffect } from "react";
import { removeVietnameseTones } from "@/app/utils/TransformVNtoEng.service";
interface SearchIuputProps {
  label: string;
  register: any;
  data: any[];
  name_key: string;
  onClick: any;
}

const SearchIuput = (props: SearchIuputProps) => {
  const { label, register, data, name_key, onClick } = props;
  const [active, setActive] = useState(false);
  const [curData, setCurData] = useState(data);

  useEffect(() => {
    setCurData(data);
  }, [data]);

  useEffect(() => {
    const handlerBlur = (e: any) => {
      if (!(e.target as any).closest(`.${name_key}`)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handlerBlur);

    return () => {
      document.removeEventListener("click", handlerBlur);
    };
  }, []);

  const filterName = (name: string) => {
    setCurData(
      data.filter((item) =>
        removeVietnameseTones(item[name_key].toLowerCase()).includes(
          removeVietnameseTones(name.toLowerCase())
        )
      )
    );
  };

  const onClickItem = (item: any) => {
    onClick(item);
    setActive(false);
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <h3 className="text-black-100">{label}</h3>
      <div className={`flex items-center relative ${name_key}`}>
        <input
          type="text"
          {...register}
          className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2"
          placeholder="-----"
          onFocus={() => setActive(true)}
          onChange={(e) => filterName(e.target.value)}
        />
        {active && (
          <div className="flex flex-col gap-2 bottom-12 max-h-64 w-full overflow-auto rounded-lg px-2 py-3 bg-white shadow-inner absolute no-scrollbar">
            {curData.length > 0 ? (
              curData.map((item, index) => (
                <p
                  key={index}
                  className="hover:bg-primary-10 px-3 py-1 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    onClickItem(item);
                  }}
                >
                  {item[name_key]}
                </p>
              ))
            ) : (
              <span className="flex items-center gap-2">-- Empty --</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIuput;
