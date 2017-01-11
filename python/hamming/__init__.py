# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(str1,str2):
    # A simple if else expression to consider the length of the both strands
    if len(str1) == len(str2):
        # Returns the length of the list formed by the differences of both strings
        return len([x for x in range(len(str1)) if str1[x] != str2[x]])
    else:
        # Raises Value error if both strands are of different length
        raise ValueError('Both strands are of different length')
