SECOND CASE :- 
            let mergedSort = this.state.sortStae;
            //YAHA CONSOLE LAGAO mergedSort and check karo 3rd wale me kya aata he 
                const findIndex = this.state.sortStae.findIndex(obj=> obj.Field === event.sort.Field)
            //YAHA CONSOLE LAGAO findIndex and check karo 3rd wale me kya aata he 
            
            //YAHA CONSOLE LAGAO event.sort and check karo 3rd wale me kya aata he 
                if(event.sort.Dir !== 'UNSORT' ){
                    // 1. if not exist ADD 
                    if(findIndex === -1){
                    //YAHA CONSOLE LAGAO I AM IN FIRST CONDITION 
                        mergedSort.push({Dir: event.sort.Dir, Field: event.sort.Field})
                    }
                    // 2. if exist but different value then Replace new value with old value 
                    if(findIndex !== -1){
                    //YAHA CONSOLE LAGAO I AM IN SECOND CONDITION 
                    
                        mergedSort[findIndex].Dir = event.sort.Dir
                    }
                } else {
                    // 1. check value is exist 
                    if(findIndex !== -1){
                        // then Remove from array 
                    //YAHA CONSOLE LAGAO I AM IN THIRD CONDITION 
                        
                        mergedSort= this.state.sortStae.filter(obj=> obj.Field !== event.sort.Field)
                    }
                }
                
                    //YAHA CONSOLE LAGAO mergedSort . kya ban raha he 
                
                //AGAIN REDECLAR THE STATE MEANS OVERIGHT THE STSTE AGAIN 
                this.setSate({ sortStae: mergedSort })
