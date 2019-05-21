import React, {Component} from 'react'
import {search} from "../util/APIUtils"
import './Search.css';
import Autocomplete from 'react-autocomplete'


class Search extends Component {
    state = {
        query: '',
    };

    constructor(props) {
        super(props);
        //      this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange = (/*event*/) => {
//        event.preventDefault();
        this.setState({
            query: this.search.value
        });
        const username = this.search.value;
        search(username);
    };

    render() {
        return (
            <Autocomplete
                inputProps={{ id: 'searchInput' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                wrapperProps={{ id: 'searchInputWrapper'}}
                items={[
                    {id: 'foo', label: 'foo'},
                    {id: 'bar', label: 'bar'},
                    {id: 'baz', label: 'baz'},
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                menuStyle={{
                    borderRadius: '3px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '2px 0',
                    fontSize: '90%',
                    position: 'fixed',
                    top: '50px',
                    overflow: 'auto',
                    maxHeight: '100%', // TODO: don't cheat, let it flow to the bottom
                }}

                renderItem={(item, highlighted) =>
                    <div className='menu'
                        key={item.id}
                        style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}

                    >
                        {item.label}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({value: e.target.value})}
                onSelect={value => this.setState({value})}
            />
        )
    }
}

export default Search

