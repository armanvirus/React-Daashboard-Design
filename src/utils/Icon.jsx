import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import SettingsPowerSharpIcon from '@mui/icons-material/SettingsPowerSharp';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

const Icon = ({name,style}) => {
  switch(name){
      case "user":
      return <Person3SharpIcon className="nav-icons"/>
      break;
      case "services":
      return <CategoryRoundedIcon className="nav-icons" />
      break;
      case 'settings':
      return <SettingsSharpIcon className="nav-icons"/>
      break;
      case "logout":
      return <SettingsPowerSharpIcon className="nav-icons logout"/>
      break;
      case 'analytics':
      return <AnalyticsRoundedIcon className="nav-icons"/>
      break
      case "message":
      return <MessageRoundedIcon className="nav-icons"/>
      break
      case 'dark':
      return <DarkModeRoundedIcon/>
      break
      case 'light':
      return <LightModeRoundedIcon/>
      break
      case 'rise':
      return <ArrowUpwardRoundedIcon/>
      break
      case 'fall':
      return <ArrowDownwardRoundedIcon/>
      break
      case 'currency':
      return <AttachMoneyRoundedIcon/>
      break
      case 'wallet':
      return <AccountBalanceWalletRoundedIcon/>
      break
  }
}

export default Icon