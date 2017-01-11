# Code Challenge

1. Fork this repository
2. Solve the problem listed below in one of the listed languages below. (Python or Javascript).
3. Ensure all of the unit tests pass.
4. Submit your commits to your fork and send us your repository for review.

** Bonus ** for solving the problem with both languages.

Note: Be sure to follow the read me instructions found in each language folder.


# Hamming

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

# Implementation notes

The Hamming distance is only defined for sequences of equal length. This means
that based on the definition, each language could deal with getting sequences
of equal length differently.


## Making the Test Suite Pass

Execute the tests with:
    Javascript: `npm test`
    Python: `python -m unittest test.hamming_test`

## Source

The Calculating Point Mutations problem at Rosalind [http://rosalind.info/problems/hamm/](http://rosalind.info/problems/hamm/)


# Screenshots

![Alt text](/screenshots/py-test.png?raw=true "Python Tests")

![Alt text](/screenshots/js-test.png?raw=true "JS Tests")