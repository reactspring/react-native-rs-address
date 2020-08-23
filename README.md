# React Native Address Search

Address Search for react-native

## Installation

```sh
npm install --save react-native-rs-address
```

or

```sh
yarn add react-native-rs-address
```

### Installation (iOS)

##### Using CocoaPods (React Native 0.60 and higher)

```sh
cd ios
pod install
```

### Installation (Android)

##### React Native 0.60 and higher
- Linking automatically

## Usage

### Example

```js
import Postcode from 'react-native-rs-address';

const App = () => (
    <Postcode
        style={{ flex: 1 }}
        jsOptions={{ animation: false }}
        onSelected={(data) => this.parsingAddress(data)}
        onError={(error: unknown) => this.printError(error)}
    />
)
```
