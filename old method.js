function checkExceptionExists(exceptionList,checkExceptions)
{
	var tempException = null;
	var tempExceptionString = null;
	var exceptionString = null;
	var exists = false;
	var ieState;

	for(i=0;i<exceptionList.size();i++)
	{
		tempException = exceptionList.get(i);
		ieState = tempException.getState();
		tempExceptionString = tempException.getDottedFieldValue("Type.UniqueName");
		if(ieState == 2 || ieState == 16)
			continue;
		
		for(j=0;j<checkExceptions.size();j++)
		{
			try 
			{
				exceptionString = checkExceptions.get(j);
			}
			catch (err) 
			{
				Log.javascript.debug("checkExceptionExists : Inside catch value of j = "+j+" and error = "+err);
			}
			
			if(exceptionString.equals(tempExceptionString))
				exists = true;
		}
	}
	
	return exists;
}
