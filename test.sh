while(true)
do
  rm /Users/harish/.browserstack/BrowserStackLocal
  npm test
  if [ $? -eq 0 ]
  then
    echo "Ran Successfully"
  else
    exit 1
  fi
done
