import Autocomplete from "./components/AutoComplete";
import InfiniteTable2 from "./components/infiniteTable2";
import OTPComponent2 from "./components/otpComponent2";
import NewComponent2 from "./components/listTransfer";
import AnotherComponent from "./components/cachedPattern";
import NewComponent from './components/squareInSquare'
import OptionsInput from './components/optionsInput'
import PaginationTable from "./components/PaginationTable";
function App() {
  return (
    <div>
      <NewComponent />
      <OTPComponent2 />
      <AnotherComponent />
      <Autocomplete />
      <NewComponent2 />
      <OptionsInput />
      <PaginationTable />
      <InfiniteTable2 />
    </div>
  )
}

export default App;