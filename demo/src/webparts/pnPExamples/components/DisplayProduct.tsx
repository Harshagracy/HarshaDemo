import * as React from 'react';
import { sp } from './PnPPreset';
import { IconButton } from 'office-ui-fabric-react/lib/components/Button/IconButton/IconButton';
import { Panel } from 'office-ui-fabric-react';
import EditProduct from './EditProduct';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IDisplayProductProps {
    context: WebPartContext;
}
export interface IDisplayProductStates {
    items: any[];
    isOpen: boolean;
    selectedItem: any;
}

export default class DisplayProduct extends React.Component<IDisplayProductProps, IDisplayProductStates> {
    constructor(props: IDisplayProductProps, state: IDisplayProductProps) {
        super(props);
        this.state = {
            items: [],
            isOpen: false,
            selectedItem: []
        }
    }
    public componentWillMount() {
        this.getAllProducts()
    }
    getAllProducts() {
        sp.web.lists.getByTitle("Product").items.top(10).get().then((items: any) => {
            this.setState({
                items: items
            });
        });
    }
    public onEditClick = (item) => {
        this.setState({
            isOpen: true,
            selectedItem: item
        })
    }
    public render(): React.ReactElement<IDisplayProductProps> {
        return (
            <span>
                <h1>Displaying all products</h1>
                <table>
                    <tr>
                        <th>Edit</th>
                        <th>Title</th>
                        <th>Product</th>
                        <th>Quantities</th>
                    </tr>
                    {this.state.items.length ? this.state.items.map((item) => {
                        return <tr style={{ textAlign: 'center', padding: 5 }}>
                            <td><IconButton iconProps={{ iconName: 'Edit' }} onClick={() => this.onEditClick(item)} /></td>
                            <td>{item.Title}</td>
                            <td>{item.Title}</td>
                            <td>{item.Quantities}</td>
                        </tr>;
                    }) : null}
                </table>
                <Panel
                    headerText="Edit Product "
                    isOpen={this.state.isOpen}
                    onDismiss={this.onDismiss}
                    // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                    closeButtonAriaLabel="Close">
                    <EditProduct Item={this.state.selectedItem} context={this.props.context} updateParent={this.onDismiss} />
                </Panel>
            </span>
        );
    }
    public onDismiss = () => {
        this.setState({
            isOpen: false,
            selectedItem: []
        }, () => {
            this.getAllProducts();
        });

    }
}
