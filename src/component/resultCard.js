import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from "@material-ui/icons/Delete";

class ResultCardSub extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="subheading">
                    {this.props.subName}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {this.props.subValue}
                </Typography>
            </div>
        )
    }
}

class ResultCard extends React.Component {
    render() {
        return (
            <Card raised>
                <CardContent>
                    <ResultCardSub 
                        subName = "BANK NAME"
                        subValue = {this.props.data.BANK}
                    />
                    <ResultCardSub 
                        subName = "IFSC CODE"
                        subValue = {this.props.data.IFSC}
                    />
                    <ResultCardSub 
                        subName = "BRANCH NAME"
                        subValue = {this.props.data.BRANCH}
                    />
                    <ResultCardSub 
                        subName = "ADDRESS"
                        subValue = {this.props.data.ADDRESS}
                    />
                    <ResultCardSub 
                        subName = "CONTACT NUMBER"
                        subValue = {this.props.data.CONTACT}
                    />
                    <ResultCardSub 
                        subName = "CITY"
                        subValue = {this.props.data.CITY}
                    />
                    <ResultCardSub 
                        subName = "DISTRICT"
                        subValue = {this.props.data.DISTRICT}
                    />
                    <ResultCardSub 
                        subName = "STATE"
                        subValue = {this.props.data.STATE}
                    />
                    <ResultCardSub 
                        subName = "BANK CODE"
                        subValue = {this.props.data.BANKCODE}
                    />
                </CardContent>
                <CardActions disableActionSpacing>
                    {
                        this.props.whichIcon === "delete" ? (
                            <IconButton aria-label="Delete" onClick={() => this.props.deleteToFav(this.props.data.IFSC)} >
                                <DeleteIcon />
                            </IconButton>
                        ) : (
                            <IconButton aria-label="Favorites" onClick={() => this.props.addToFav(this.props.data.IFSC)} >
                                <FavoriteIcon />
                            </IconButton>
                        )
                    }
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }   
}

export default ResultCard;


  