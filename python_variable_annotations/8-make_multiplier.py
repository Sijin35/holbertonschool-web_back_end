#!/usr/bin/env python3
"""Module that takes a float and returns 
    a function that multiplies float by float
"""


from collections.abc import Callable


multiplier: Callable[float]

def make_multiplier(multiplier: float) -> float:
    """Takes float and returns float multiplied by float"""

    def fun(multiplier):
    
        return multiplier * multiplier