import React, { Component } from 'react'

import { Helmet } from 'react-helmet';
import axios from 'axios'

import {Container, Row, CardGroup, Alert} from 'react-bootstrap'
import AccountsCard from '../../components/ExtraComponents/AccountStore/AccountsCard';
import SearchBox from '../../components/ExtraComponents/SearchBox'

import HowToBegin from '../../components/layouts/HowToBegin';

import { apiURL } from '../../utils/apiURL'

import { attributes, react as Content } from '../../content/runescapeaccounts.md';


class AccountStore extends Component {
    constructor(props){
        super(props);
        this.state = { 
            fetchedAccounts: [],
            searchAccounts: ''
        }
    }

    async componentDidMount(){
        const fetchAccountsRes = await axios({
            method: 'GET',
            url: `${apiURL}/runescape-accounts`
        })

        const { accounts } = attributes;
        console.log("accounts ",accounts)

        // const fetchAccounts = fetchAccountsRes.data
        const fetchAccounts = accounts;
        this.setState({fetchedAccounts: fetchAccounts})
    }

    handleSearchInput = (event) => {
        this.setState({ searchAccounts: event.target.value})
    }

    render() {
        const {fetchedAccounts, searchAccounts} = this.state

        let filteredAccounts = fetchedAccounts.filter((account) => {
            const allInformation = 
                account.id + 
                account.gamemode + 
                account.title + 
                account.price + 
                account.description + 
                account.categories + 
                account.accountlevel + 
                account.postAt;
            return allInformation.toLowerCase().includes(searchAccounts.toLowerCase())
        })

        return (
            <div className="container">
            <Helmet>
                <title>RPGStock | Runescape Account Store</title>
                <meta name="description" content="About RPGStock, The place to buy handmade runescape accounts" />
            </Helmet>
                <h1>Runescape Accounts</h1>
                < hr/>
                <SearchBox handleSearchInput={this.handleSearchInput} placeholder={"Search for an account..."}/>
                <CardGroup>
                <Container fluid>
                    <Row className="row">
                        {filteredAccounts.map(account => (
                        <AccountsCard key={account.id}
                            id={account.id}
                            identifier={account.identifier}
                            title={account.title}
                            gamemode={account.gamemode}
                            price={account.price}
                            thumbnail={account.thumbnail}
                            description={account.description}
                            categories={account.category}
                            accountlevel={account.accountlevel}
                            postAt={account.publishdate}
                        />
                        ))}  
                    </Row>
                </Container>
                </CardGroup> 
                {fetchedAccounts >= 0 &&
                    <Alert variant={'warning'}>
                        <p>No Accounts Found</p>
                        <p>Please <a href="/contact">Contact Support</a> if you see this</p>
                    </Alert>
                }
                
      
                < HowToBegin />
            </div>
        );
    }
}

export default AccountStore;
