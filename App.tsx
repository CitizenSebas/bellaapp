import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/presentation/src/navigation/StackNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

