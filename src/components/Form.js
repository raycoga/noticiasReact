import React, { Component } from 'react';

class Form extends Component {
        state={
            category:'business',
            country:'ve'
        }
       
        changeCategory= e=>{
                this.setState({
                    ...this.state,
                    [e.target.name]:e.target.value
                },()=>{ 
/* Esta funcion es una callback, y es una funcion que se ejecuta inmediatamente despues de que se ejecuta el cambio del state, funciona cuando quieres realizar un cambio de estado y que se renderice otro componente al instante inmediantemente despues de que se realice el cambio de estado, en este caso, la funcion que se esta llamando estaba fuera de el setState y lo que pasaba es que, las categorias se cambiaban, pero no se ejecutaba la funcion inmediatamente, y cuando se volvia a cambiar de categoria, era que se ejecutaba la funcion, pero con el valor que poseeia en state en su Estado anterior  */

                //de esta forma se pasa a la pag principal

                this.props.checkNews(this.state)
                })

                
        }

    render() {
        const options =['business', 'entertainment', 'general', 'health' ,'science' ,'sports', 'technology']
        const countries =['ve','ae', 'ar' ,'at' ,'au' ,'be', 'bg', 'br', 'ca' ,'ch' ,'cn', 'co', 'cu', 'cz' ,'de', 'eg', 'fr', 'gb', 'gr' ,'hk' ,'hu', 'id' ,'ie','il' ,'in' ,'it' ,'jp' ,'kr', 'lt', 'lv' ,'ma' ,'mx' ,'my' ,'ng', 'nl' ,'no' ,'nz', 'ph' ,'pl' ,'pt' ,'ro' ,'rs' ,'ru' ,'sa' ,'se' ,'sg', 'si' ,'sk' ,'th', 'tr' ,'tw', 'ua' ,'us'  ,'za']
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form action="">
                        <h2>Find News by category</h2>
                        <div className="input-field col s6 ">
                            <select name='country' onChange={this.changeCategory}>
                                {countries.map(res=>{
                                    return(
                                    <option value={res}  >{res.charAt(0).toUpperCase() + res.substring(1)}</option>    
                                    )
                                })}
                                
                            </select>
                        </div>
                        <div className="input-field col s6 ">
                            <select name='category' onChange={this.changeCategory}>
                                {options.map(res=>{
                                    return(
                                    <option  value={res}>{res.charAt(0).toUpperCase() + res.substring(1)}</option>    
                                    )
                                })}
                                
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;