     function checkExceptionExists(exceptionList,checkExceptions)
      {
       var tempException = null;
       var tempExceptionString = null;
       var exceptionString = null;
       var exists = false;
       var ieState;
       Log.javascript.debug("checkExceptionExists : exceptionList = "+exceptionList+" checkExceptions = "+checkExceptions);

       for(i=0;i<exceptionList.size();i++)
       {
        tempException = exceptionList.get(i);
        ieState = tempException.getState();
		Log.javascript.debug("ieState = "+ieState);
        tempExceptionString = tempException.getDottedFieldValue("Type.UniqueName");
		Log.javascript.debug("tempExceptionString = "+tempExceptionString);
        if(ieState == 2 || ieState == 16)
          continue;
        Log.javascript.debug("checkExceptionExists : tempException = "+tempException+" tempExceptionString = "+tempExceptionString+" ieState = "+ieState);
         for(j=0;j<checkExceptions.size();j++){

         //CR8170: Added try/catch to capture IndexOutOfBounds exception
                try {
                    exceptionString = checkExceptions.get(j);
					Log.javascript.debug("exceptionString = "+exceptionString);
                }
                catch (err) {
                    		Log.javascript.debug("checkExceptionExists : Inside catch value of j = "+j+" and error = "+err);
                }

               Log.javascript.debug("checkExceptionExists : tempExceptionString = "+tempExceptionString+" exceptionString = "+exceptionString);

          if(exceptionString.equals(tempExceptionString))
            exists = true;
         }
       }
       Log.javascript.debug("checkExceptionExists : returning "+exists);
       return exists;
     }
