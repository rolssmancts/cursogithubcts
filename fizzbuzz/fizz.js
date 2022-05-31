var num = 100;
for (var i = 1; i <= 100; i++)
{
  if (divisible(i, 3))
  {
    document.write ("FIZZ");
  }
  if (divisible(i,5))
  {
    document.write ("BUZZ");
  }
  if (!divisible(i,3) && !divisible(i,5))
  {
    document.write (i);
  }
  document.write ("<br />");
}

function divisible (num, div)
{
  if (num % div == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
