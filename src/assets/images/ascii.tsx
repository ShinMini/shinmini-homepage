import { sp } from '@src/themes';
import styled, { keyframes } from 'styled-components';

const asciiArr = [
  '                       +++--....                   ',
  '                    :#%@%%@@@@%%%%#+-              ',
  '                  .+%%%@%%@@%%%%@@@%#.             ',
  '                 -%%%%@%%@%%%@@@@@@@%-             ',
  '                .%%%%%%%%%*%@@@@%%@@@:             ',
  '                *%%%%@#*+-+*#%%#%%@@@-             ',
  '               :%%%@@%-::-=*%%##%%%@%+++++=        ',
  '               :%++=##----=+**=-=%@@@@@@#@@.       ',
  '     -#-     :..%=*+-======++*=**#%%@@@@@@@.       ',
  '      *%.   .#- -%*++========+++%%%%**#@@@@.       ',
  '      .##   -#.  =@@*+++===+##*#@@%%@%*=+@@.       ',
  '       +%- .**    *@+**#*+++++*#%%*+%%@@**#.       ',
  '       -#*.+#:    :%++*#####*##%%+===++*#+==:      ',
  '      .=%%%%#     .-+++++*#%%%%@%+=+++**+++#%-     ',
  '   .:-##+*#%#  .:-+%+++++*##%%%@%%+-=*+=+*##%#     ',
  '   .#**%%%%%%:::-+%%*++++*#%%%%@#####==**###%#.    ',
  '   .##%%%%#%%+--=*@%%****####%@@@#%##%+****##%+    ',
  '   .*##%%##%=:--*@@%%%#*#####@@@@@##@@@%****##%%+. ',
  '  *%%##%%%=--==*@@@%%%%-+****@@@%@@@@@@@@#*+*##%@@-',
  ' --#@@@@@%#+-=#%@@@%%%%%+=-=%%@%%%%@@@@@%@****#%%@#',
  '+==+*#%@@%%*@@@@@@%@%%@@#==#@@%%%%%%@@%%%%@++**##%+',
];

const textClip = keyframes`
  to {
    background-position: 200% center;
  }
  `;

const AnimText = styled.pre`
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;

  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textClip} 2s linear infinite;

  line-height: 1;

  font-size: 8px;

  @media ${sp.md} and (min-height: 450px) {
    font-size: 12px;
  }

  @media ${sp.lg} and (min-height: 450px) {
    font-size: 14px;
  }
`;

const AsciiImage = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center m-auto">
      {asciiArr.map((text, index) => {
        return (
          <AnimText className="w-full h-fit leading-4 font-black" key={`${text}-${index}`}>
            {text}
          </AnimText>
        );
      })}
    </div>
  );
};

export default AsciiImage;
