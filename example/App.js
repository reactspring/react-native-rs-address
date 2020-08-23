/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import DaumPostcode from 'react-native-rs-address';

const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content"/>
			<SafeAreaView>

				<View style={{ width: "100%", height: "100%" }}>

					<DaumPostcode
						style={{ flex: 1 }}
						jsOptions={{ animation: true }}
						onSelected={(data) => alert(JSON.stringify(data))}
					/>

				</View>

			</SafeAreaView>
		</Fragment>
	);
};


export default App;
